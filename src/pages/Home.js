import React, { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  orderBy, // Import orderBy
  query, // Import query
} from "firebase/firestore";
import { auth, db, storage } from "../firebase-config";
import { getDownloadURL, ref } from "firebase/storage";
import Sidebar from "./Sidebar";
import "./Home.css";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      // Create a query that orders the posts by the createdAt field in descending order
      const q = query(
        postsCollectionRef,
        orderBy("createdAt", "desc") // Order by createdAt in descending order
      );

      const data = await getDocs(q);
      const posts = await Promise.all(
        data.docs.map(async (doc) => {
          const post = doc.data();
          if (post.imageUrl) {
            try {
              const imgUrl = await getDownloadURL(
                ref(storage, `images/${post.imageUrl}`)
              );
              post.imageUrl = imgUrl;
            } catch (error) {
              console.error("Error fetching image from Firebase Storage:", error);
            }
          }
          return { ...post, id: doc.id };
        })
      );
      setPostList(posts);
    };

    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);

    // Update the postLists state by removing the deleted post
    setPostList((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <div className="homePage">
      <Sidebar />
      {postLists.map((post) => {
        // Convert the createdAt timestamp to a JavaScript Date object
        const postDate = post.createdAt?.toDate();
        return (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            {post.imageUrl && (
              <div className="postImage">
                <img
                  src={post.imageUrl}
                  alt="Uploaded"
                  style={{ maxWidth: "100%", marginTop: "10px", height: "315px" }}
                />
              </div>
            )}
            <div className="author">
              <h3>@{post.author.name}</h3>
            </div>
            {/* Display the post's creation date */}
            {postDate && (
              <p className="postDate">
                Päivämäärä: {postDate.toLocaleDateString()}{" "}
                {postDate.toLocaleTimeString()}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Home;

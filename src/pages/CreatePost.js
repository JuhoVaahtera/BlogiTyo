import React, { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; // Import serverTimestamp
import { db, auth, storage } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [imageUpload, setImageUpload] = useState(null);

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    let imageUrl = null;

    if (imageUpload) {
      const imageRef = ref(storage, `images/${uuidv4()}-${imageUpload.name}`);
      await uploadBytes(imageRef, imageUpload);
      imageUrl = await getDownloadURL(imageRef);
    }

    // Use serverTimestamp to capture the current date and time
    const currentDate = serverTimestamp();

    await addDoc(postsCollectionRef, {
      title,
      postText,
      imageUrl,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
      // Store the current date with the post
      createdAt: currentDate,
    });

    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="Post.."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;

import "./Post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" 
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww&w=1000&q=80" alt="" 
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet 
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Libero fugiat, exercitationem vero, adipisci commodi quibusdam
        eius officiis ut ducimus eligendi magni fuga! Porro repellat
         a perferendis modi, consectetur voluptas neque?e
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Libero fugiat, exercitationem vero, adipisci commodi quibusdam
        eius officiis ut ducimus eligendi magni fuga! Porro repellat
         a perferendis modi, consectetur voluptas neque?e
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Libero fugiat, exercitationem vero, adipisci commodi quibusdam
        eius officiis ut ducimus eligendi magni fuga! Porro repellat
         a perferendis modi, consectetur voluptas neque?e
         </p>
    </div>
  )
}

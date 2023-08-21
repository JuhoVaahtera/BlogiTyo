import "./SinglePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
            src="https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg" 
            alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet 
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Autor: <b>Leevi</b>
                </span>
                <span className="singlePostdate"> 
                    1 hour ago
                </span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur voluptas incidunt ad fuga tempora suscipit voluptate,
                officia perspiciatis eos necessitatibus fugiat magnam
                corporis ducimus quae quasi maiores molestiae voluptatem.
                Rem?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur voluptas incidunt ad fuga tempora suscipit voluptate,
                officia perspiciatis eos necessitatibus fugiat magnam
                corporis ducimus quae quasi maiores molestiae voluptatem.
                Rem?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur voluptas incidunt ad fuga tempora suscipit voluptate,
                officia perspiciatis eos necessitatibus fugiat magnam
                corporis ducimus quae quasi maiores molestiae voluptatem.
                Rem?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur voluptas incidunt ad fuga tempora suscipit voluptate,
                officia perspiciatis eos necessitatibus fugiat magnam
                corporis ducimus quae quasi maiores molestiae voluptatem.
                Rem?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur voluptas incidunt ad fuga tempora suscipit voluptate,
                officia perspiciatis eos necessitatibus fugiat magnam
                corporis ducimus quae quasi maiores molestiae voluptatem.
                Rem?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur voluptas incidunt ad fuga tempora suscipit voluptate,
                officia perspiciatis eos necessitatibus fugiat magnam
                corporis ducimus quae quasi maiores molestiae voluptatem.
                Rem?
                
            </p>
        </div>
    </div>
  )
}

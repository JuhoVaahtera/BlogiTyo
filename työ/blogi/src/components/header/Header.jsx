import "./Header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node </span>
            <span className="headerTitleLg">Blog </span>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1287145.jpg&fm=jpg" alt="" />
    </div>
  )
}

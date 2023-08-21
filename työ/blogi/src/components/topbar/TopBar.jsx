import "./TopBar.css"

export default function TopBar() {
  return (
    <div className='top'>

      <div className="topLeft">
        <i className="topIcon fa-brands fa-discord"></i>
        <i className="topIcon fa-brands fa-steam"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
        </ul>
      </div>

      <div className="topRight">
        <img
        className="topImg"
         src="https://wallpapers.com/images/hd/funny-naruto-meme-pfp-d5rq1tt0s8ym5xhy.jpg" alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}

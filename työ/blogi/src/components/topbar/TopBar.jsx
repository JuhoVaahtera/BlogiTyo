import { Link } from "react-router-dom";
import "./TopBar.css"

export default function TopBar() {
  const currentUser = true;
  return (
    <div className='top'>

      <div className="topLeft">
        <i className="topIcon fa-brands fa-discord"></i>
        <i className="topIcon fa-brands fa-steam"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
            </li>
            <li className="topListItem">
              <Link to="/about" style={{textDecoration:"none", color:"inherit"}}>ABOUT</Link>
            </li>
            <li className="topListItem">
              <Link to="/contact" style={{textDecoration:"none", color:"inherit"}}>CONTACT</Link>
            </li>
            <li className="topListItem">
              <Link to="/Write" style={{textDecoration:"none", color:"inherit"}}>WRITE</Link>
            </li>
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

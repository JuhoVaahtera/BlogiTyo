import "./SideBar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://pfps.gg/assets/pfps/4382-melon.png" alt="" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius veniam reiciendis laudantium,
            totam minima non harum praesentium doloremque reprehenderit saepe,
          </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span> 
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-discord"></i>
        <i className="sidebarIcon fa-brands fa-steam"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
        </div>
    </div>
  )
}

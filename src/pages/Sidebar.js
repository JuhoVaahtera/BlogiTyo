import React from "react";
import "./SideBar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Tervetuloa blogiimme!</span>

        <img src="https://media.istockphoto.com/id/1158561473/vector/three-persons-icon-black-vector.jpg?s=612x612&w=0&k=20&c=UvL4Nvz9nL4zi5RdjAabosuFer98suMTA-FheZ2KLlQ=" alt="" />

        <ul className="sidebarList">
          <li>
            <strong>Tietoa blogista: </strong> Blogin aihe on Ohjelmoinnin ja it-taitojen oppiminen
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Blogista:</span>
        <ul className="sidebarList">
          <li>
            <strong>Kertokaa: </strong> 
            Mitä olette oppineet milläkin kurssilla ja milloin. 
            Mitä ja miten olet oppinut ohjelmoinnista, suunnittelusta ja ITs:tä vapaa-ajalla

          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Tekijät:</span>
        <p>
          <strong>Leevi</strong> 
        </p>
        <p>
          <strong>Juho</strong> 
        </p>
        <p>
          <strong>Tjimi</strong> 
        </p>
      </div>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import { useContext } from "react";

import "./sidebar.css";
import { ForumDataContext } from "../../contexts/forumData-context";

export function Sidebar() {
  const { updatedForumData } = useContext(ForumDataContext);

  return (
    <div className="sidebar_container">
      <nav className="nav_container">
        <NavLink className={"nav_links"}>Home</NavLink>
        <NavLink className={"nav_links"}>Explore</NavLink>
        <NavLink className={"nav_links"}>Bookmarks</NavLink>
        <NavLink className={"nav_links"}>Profile</NavLink>
      </nav>

      <div className="profile_container">
        <img src={updatedForumData.picUrl} alt="Profile" />
        <div>
          <p>{updatedForumData.name}</p>
          <p>{updatedForumData.username}</p>
        </div>
      </div>
    </div>
  );
}

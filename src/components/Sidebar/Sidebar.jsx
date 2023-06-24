import { NavLink } from "react-router-dom";

import "./sidebar.css";

export function Sidebar() {
  return (
    <nav className="sidebar_container">
      <NavLink className={"nav_links"}>Home</NavLink>
      <NavLink className={"nav_links"}>Explore</NavLink>
      <NavLink className={"nav_links"}>Bookmarks</NavLink>
      <NavLink className={"nav_links"}>Profile</NavLink>
    </nav>
  );
}

import { useContext } from "react";

import "./sidebar.css";
import { ForumDataContext } from "../../contexts/forumData-context";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export function Sidebar() {
  const { updatedForumData } = useContext(ForumDataContext);

  return (
    <div className="sidebar_container">
      <nav className="nav_container">
        <div className={"nav_links"}>
          <HomeOutlinedIcon />
          <p>Home</p>
        </div>

        <div className={"nav_links"}>
          <RocketLaunchOutlinedIcon />
          <p>Explore</p>
        </div>

        <div className={"nav_links"}>
          <BookmarkBorderOutlinedIcon />
          <p>Bookmarks</p>
        </div>

        <div className={"nav_links"}>
          <AccountCircleOutlinedIcon />
          <p>Profile</p>
        </div>
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

import { useContext } from "react";

import "./home.css";
import { PostCard } from "../PostCard/PostCard";
import { ForumDataContext } from "../../contexts/forumData-context";
import { Sidebar } from "../Sidebar/Sidebar";
import { Sort } from "../Sort/Sort";

export function Home() {
  const { updatedForumData } = useContext(ForumDataContext);
  return (
    <div className="home_container">
      <Sidebar />
      <div>
        <h2 className="header">Latest Posts</h2>
        {updatedForumData.posts.map((post) => (
          <PostCard singlePost={post} key={post.postId} className="postcard" />
        ))}
      </div>

      <Sort />
    </div>
  );
}

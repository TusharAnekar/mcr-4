import { useContext } from "react";
import { PostCard } from "../PostCard/PostCard";
import { ForumDataContext } from "../../contexts/forumData-context";

import "./home.css"

export function Home() {
  const { updatedForumData } = useContext(ForumDataContext);
  return (
    <div className="home_container">
      <h2 className="header">Latest Posts</h2>
      {updatedForumData.posts.map((post) => (
        <PostCard singlePost={post} key={post.postId} className="postcard"/>
      ))}
    </div>
  );
}

import { useParams } from "react-router-dom";
import { PostCard } from "../../components/PostCard/PostCard";
import { useContext } from "react";
import { ForumDataContext } from "../../contexts/forumData-context";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export function PostDetails() {
  const { postId } = useParams();
  const {updatedForumData} = useContext(ForumDataContext)

  const postDetailsPost = updatedForumData.posts.find((post) => post.postId === postId)
  return (
    <div className="home_container">
      <Sidebar />
      <PostCard singlePost={postDetailsPost} details/>
    </div>
  );
}

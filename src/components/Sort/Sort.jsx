import { useContext } from "react";

import { ForumDataContext } from "../../contexts/forumData-context";

export function Sort() {
  const { updatedForumData, setUpdatedForumData } =
    useContext(ForumDataContext);

  function handleSort(e) {
    if (e.target.value === "liked_posts") {
      setUpdatedForumData({
        ...updatedForumData,
        posts: updatedForumData.posts.sort((a, b) => b.upvotes - a.upvotes),
      });
    } else {
      setUpdatedForumData({
        ...updatedForumData,
        posts: updatedForumData.posts.sort((a, b) =>
          a.createdAt.localeCompare(b.createdAt)
        ),
      });
    }
  }
  return (
    <div>
      <h2>Sort</h2>
      <select name="" id="" onChange={handleSort}>
        <option value="latest_posts">Latest Posts</option>
        <option value="liked_posts">Liked Posts</option>
      </select>
    </div>
  );
}

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./postcard.css";
import { ForumDataContext } from "../../contexts/forumData-context";
import { Comments } from "../Comments/Comments";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export function PostCard({ singlePost, details }) {
  const {
    postId,
    username,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    comments,
    isBookmarked,
  } = singlePost;

  const navigate = useNavigate();

  const { updatedForumData, setUpdatedForumData } =
    useContext(ForumDataContext);

  function handleUpVotes() {
    setUpdatedForumData({
      ...updatedForumData,
      posts: updatedForumData.posts.map((post) =>
        post.postId === postId ? { ...post, upvotes: ++post.upvotes } : post
      ),
    });
  }

  function handleDownVotes() {
    setUpdatedForumData({
      ...updatedForumData,
      posts: updatedForumData.posts.map((post) =>
        post.postId === postId ? { ...post, upvotes: --post.upvotes } : post
      ),
    });
  }

  function handleBookmark() {
    setUpdatedForumData({
      ...updatedForumData,
      posts: updatedForumData.posts.map((post) =>
        post.postId === postId
          ? { ...post, isBookmarked: !post.isBookmarked }
          : post
      ),
    });
  }

  return (
    <div className="post_container">
      <div className="counter">
        <ArrowDropUpIcon onClick={handleUpVotes} className="up_arrow">
          Like
        </ArrowDropUpIcon>
        <p>{upvotes - downvotes}</p>
        <ArrowDropDownIcon onClick={handleDownVotes}>Dislike</ArrowDropDownIcon>
      </div>

      <div className="post_content">
        <div className="post_img_username">
          <img src={picUrl} alt="Profile" />
          <p>Posted by @{username}</p>
        </div>
        <div className="post_tags">
          <h3>{post}</h3>
          <div className="tags">
            {tags.map((tag, index) => (
              <p key={index} className="tag">
                {tag}
              </p>
            ))}
          </div>
          <p>{postDescription}</p>
        </div>

        <div className="post_socials">
          {details ? (
            <Comments comments={comments} />
          ) : (
            <ChatBubbleOutlineIcon onClick={() => navigate(`/${postId}`)} />
          )}
          <ShareOutlinedIcon>Share</ShareOutlinedIcon>
          {isBookmarked ? (
            <BookmarkIcon onClick={handleBookmark} />
          ) : (
            <BookmarkBorderOutlinedIcon onClick={handleBookmark} />
          )}
        </div>
      </div>
    </div>
  );
}

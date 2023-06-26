import "./comments.css"

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export function Comments({comments}) {
  return (
    <div className="comments_container">
      <ChatBubbleOutlineIcon />
      <div>
        {
            comments?.map(({commentId, username, picUrl, likes, comment, createdAt}) => <div key={commentId}>
                <img src={picUrl} alt="profile" />
                <p>{username}</p>
                <div>
                    <p>{comment}</p>
                    <p>{likes}</p>
                </div>
            </div>)
        }
      </div>
    </div>
  );
}

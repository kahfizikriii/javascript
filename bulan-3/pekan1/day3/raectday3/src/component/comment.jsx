import UserInfo from "./userinfo";
import CommentText from "./commentText";

function Comment({ user, text }) {
  return (
    <div style={{ border: "1px solid #aaa", padding: "10px", margin: "10px", borderRadius: "8px" }}>
      <UserInfo user={user} />
      <CommentText text={text} />
    </div>
  );
}

export default Comment;

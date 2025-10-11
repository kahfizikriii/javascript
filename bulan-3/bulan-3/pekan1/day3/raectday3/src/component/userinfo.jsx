import Avatar from "./avatar";

function UserInfo({ user }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
       <Avatar src={user.avatarUrl} alt={user.name} />
    </div>
  );
}

export default UserInfo;

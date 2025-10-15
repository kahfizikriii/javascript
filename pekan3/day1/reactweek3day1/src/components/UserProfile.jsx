import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserProfile() {
  const { user, logout } = useContext(UserContext);

  if (!user.isLoggedIn) return <p>Silakan login terlebih dahulu.</p>;

  return (
    <div>
      <h2>Profil Pengguna</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

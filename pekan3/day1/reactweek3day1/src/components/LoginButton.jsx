import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function LoginButton() {
  const { login, user } = useContext(UserContext);

  if (user.isLoggedIn) return null;

  return (
    <button onClick={() => login("Muhammad Al Kahfi Zikri", "kahfizikri@gmail.com")}>Login</button>
  );
}

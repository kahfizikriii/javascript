import { useUserContext } from "../hooks/useUserContext";

export default function UserDetails() {
  const { user } = useUserContext();

  return (
    <p>
      Halo, <strong>{user.name || "Tamu"}</strong>!
    </p>
  );
}

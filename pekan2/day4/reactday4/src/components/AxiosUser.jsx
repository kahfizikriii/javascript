import { useEffect, useState } from "react";
import axios from "axios";

function AxiosUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => setUser(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p> Mengambil data pengguna...</p>;
  if (error) return <p> Terjadi kesalahan: {error}</p>;

  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Telepon: {user.phone}</p>
    </div>
  );
}

export default AxiosUser;

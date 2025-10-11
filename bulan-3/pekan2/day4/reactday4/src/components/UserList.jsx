import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      const filtered = data.slice(0, 5);
      setUsers(filtered);
    };

    getUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

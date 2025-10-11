import { useState } from "react";

// nomor1
function Counter() {
  const [count, setCount] = useState(0);
  //nomor5 (funcitional update pada state)
  const handleTambah = () => setCount((prev) => prev + 1);
  const handleKurang = () => setCount((prev) => prev - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter Sederhana</h2>
      <h3>Angka: {count}</h3>
      <button onClick={handleTambah}>Tambah</button>
      <button onClick={handleKurang} style={{ marginLeft: "10px" }}>
        Kurang
      </button>
    </div>
  );
}

// nomor2
function UserProfile() {
  const [name, setName] = useState("Muhammad Al Kahfi Zikri");
  const [age, setAge] = useState(20);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => setIsEditing(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Profil Pengguna</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
          <button onClick={handleSave} style={{ marginLeft: "10px" }}>
            Simpan
          </button>
        </div>
      ) : (
        <div>
          <p>Nama: {name}</p>
          <p>Usia: {age}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

// nomor3
function ContactForm() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Formulir Kontak</h2>
      <input
        type="text"
        name="firstName"
        placeholder="Nama Depan"
        value={contact.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Nama Belakang"
        value={contact.lastName}
        onChange={handleChange}
        style={{ marginLeft: "10px" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={contact.email}
        onChange={handleChange}
        style={{ marginLeft: "10px" }}
      />
      <div style={{ marginTop: "15px" }}>
        <h4>Data Real-Time:</h4>
        <p>
          {contact.firstName} {contact.lastName}
        </p>
        <p>{contact.email}</p>
      </div>
    </div>
  );
}

// nomor4
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo, done: false }]);
    setNewTodo("");
  };

  const toggleDone = (index) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Daftar Tugas</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Tambah tugas..."
      />
      <button onClick={addTodo} style={{ marginLeft: "10px" }}>
        Tambah
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "15px" }}>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={() => toggleDone(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// App Utama
function App() {
  return (
    <div
      style={{
        flexDirection: "column",
        width: "100vw", 
      }}
    >
      <Counter />
      <UserProfile />
      <ContactForm />
      <TodoList />
    </div>
  );
}

export default App;

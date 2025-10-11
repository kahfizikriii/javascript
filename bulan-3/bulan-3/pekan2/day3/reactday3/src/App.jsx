import { useState, useEffect } from "react";

function App() {
  // === 1.Membuat Komponen dengan useEffect Sederhana ===
  useEffect(() => {
    console.log("Komponen di render atau di update!");
  });

  // === 2.Menggunakan useEffect dengan Dependency Array ===
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]); 

  // === 3.Menerapkan Cleanup Function ===
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // === 4.Menggunakan Multiple useEffect dalam Satu Komponen ===
  const [count, setCount] = useState(0);
  const [name, setName] = useState("kahfi");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(`Nama berubah menjadi: ${name}`);
  }, [name]);

  // === 5.Simulasi Fetch Data dengan useEffect ===
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Mengambil data...");
    const timer = setTimeout(() => {
      setData({ message: "Data berhasil diambil (simulasi)!" });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* nomor 1 dan 2 */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Data Pengguna (Fetch dari API)</h2>
        <p>
          <strong>ID Saat Ini:</strong> {userId}
        </p>
        <button onClick={() => setUserId((prev) => (prev < 10 ? prev + 1 : 1))}>
          Ganti User ID
        </button>
        {user ? (
          <div style={{ marginTop: "10px" }}>
            <p>Nama: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>Loading user...</p>
        )}
      </section>

      {/* nomor 3 */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Ukuran Jendela</h2>
        <p>
          Lebar: {windowSize.width}px | Tinggi: {windowSize.height}px
        </p>
      </section>

      {/* nomor 4 */}
      <section style={{ marginBottom: "30px" }}>
        <h2> Multiple useEffect</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Tambah Count</button>
        <div style={{ marginTop: "10px" }}>
          <p>Nama: {name}</p>
          <button onClick={() => setName(name === "kahfi" ? "irgi" : "kahfi")}>
            Ganti Nama
          </button>
        </div>
      </section>

      {/* nomor 5 */}
      <section>
        <h2> Simulasi Fetch Data</h2>
        {data ? <p>{data.message}</p> : <p>Mengambil data...</p>}
      </section>
    </div>
  );
}

export default App;

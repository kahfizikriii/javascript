import React, {
  useState,
  useMemo,
  useCallback,
  memo,
  lazy,
  Suspense,
} from "react";

// ======================================================
// 1️⃣ React.memo
// ======================================================
const ChildMemo = memo(({ count }) => {
  console.log(" [1] ChildMemo dirender ulang");
  return <h4>Nilai dari Parent (React.memo): {count}</h4>;
});

// ======================================================
//  useMemo
// ======================================================
function HeavyCalculation({ number }) {
  console.log(" [2] Komponen HeavyCalculation dirender");
  const expensiveCalculation = (num) => {
    console.log(" [2] Perhitungan berat dijalankan...");
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
      result += num * 2;
    }
    return result;
  };

  const calculatedValue = useMemo(() => expensiveCalculation(number), [number]);

  return <p>Hasil perhitungan berat: {calculatedValue}</p>;
}

// ======================================================
//  useCallback
// ======================================================
const CallbackChild = memo(({ onClick }) => {
  console.log(" [3] CallbackChild dirender ulang");
  return (
    <button onClick={onClick} style={{ marginTop: 5 }}>
      Tambah Nilai (useCallback)
    </button>
  );
});

// ======================================================
//  Lazy Loading
// ======================================================
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// ======================================================
// APP UTAMA
// ======================================================
function App() {
  console.log(" [MAIN] App dirender ulang");
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");
  const [page, setPage] = useState("home");

  // [3] useCallback
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Tugas Hari ke-15: Optimasi & Performance React</h1>

      {/* ======================================================
           React.memo
      ====================================================== */}
      <section style={{ borderBottom: "1px solid #ccc", marginBottom: 20 }}>
        <h2>1️⃣ React.memo</h2>
        <button onClick={() => setCount(count + 1)}>Tambah Count</button>
        <input
          type="text"
          placeholder="Ketik sesuatu..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <ChildMemo count={count} />
      </section>

      {/* ======================================================
           useMemo
      ====================================================== */}
      <section style={{ borderBottom: "1px solid #ccc", marginBottom: 20 }}>
        <h2>2️⃣ useMemo</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <HeavyCalculation number={number} />
      </section>

      {/* ======================================================
           useCallback
      ====================================================== */}
      <section style={{ borderBottom: "1px solid #ccc", marginBottom: 20 }}>
        <h2>3️⃣ useCallback</h2>
        <p>Count saat ini: {count}</p>
        <CallbackChild onClick={increment} />
      </section>

      {/* ======================================================
           Code Splitting dan Lazy Loading
      ====================================================== */}
      <section>
        <h2>4️⃣ Code Splitting & Lazy Loading</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("about")}>About</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </div>

        <Suspense fallback={<p>Loading halaman...</p>}>
          {page === "home" && <Home />}
          {page === "about" && <About />}
          {page === "contact" && <Contact />}
        </Suspense>
      </section>
    </div>
  );
}

export default App;

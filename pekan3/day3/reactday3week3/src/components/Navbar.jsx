export default function Navbar({ setPage }) {
  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>
      <button onClick={() => setPage("contact")}>Contact</button>
    </nav>
  );
}

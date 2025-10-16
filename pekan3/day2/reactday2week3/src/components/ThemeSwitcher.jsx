import { useLocalStorage } from "../hooks/useLocalStorage";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div style={{ padding: "10px", background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <p>Tema saat ini: {theme}</p>
      <button onClick={toggleTheme}>Ganti Tema</button>
    </div>
  );
}

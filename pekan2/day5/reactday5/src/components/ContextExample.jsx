// Nomor 5 - Context API
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Ganti ke {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

function Box() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      Tema saat ini: {theme}
    </div>
  );
}

export function ContextExample() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ textAlign: "center" }}>
        <h2>Context API - Tema</h2>
        <ThemeButton />
        <Box />
        <Box />
      </div>
    </ThemeContext.Provider>
  );
}

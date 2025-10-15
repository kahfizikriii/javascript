import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function CardTheme() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        marginTop: "10px",
        padding: "1rem",
        borderRadius: "8px",
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>Kartu ini mengikuti tema {theme}</p>
    </div>
  );
}

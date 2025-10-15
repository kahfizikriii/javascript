import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ButtonTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Ganti ke {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

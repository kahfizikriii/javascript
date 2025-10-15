import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function TextTheme() {
  const { theme } = useContext(ThemeContext);
  return (
    <p style={{ color: theme === "light" ? "black" : "white" }}>
      Teks ini berubah sesuai tema: {theme}
    </p>
  );
}

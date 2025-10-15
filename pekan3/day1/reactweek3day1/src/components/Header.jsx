import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { NotificationContext } from "../context/NotificationContext";

export default function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { notifications } = useContext(NotificationContext);

  return (
    <header style={{ marginBottom: "1rem" }}>
      <button onClick={toggleLanguage}>Ganti Bahasa</button>
      <p>
        Bahasa: <strong>{language === "id" ? "Indonesia" : "English"}</strong>
      </p>
      <p>Notifikasi: {notifications}</p>
    </header>
  );
}

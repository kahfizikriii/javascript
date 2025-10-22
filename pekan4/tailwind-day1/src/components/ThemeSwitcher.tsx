import { useState, useEffect } from "react"

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  )

  useEffect(() => {
    // toggle class 'dark' di tag <html>
    document.documentElement.classList.toggle("dark", theme === "dark")
    // simpan preferensi ke localStorage
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-4 py-2 rounded-md border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  )
}

import { ThemeSwitcher } from "./components/ThemeSwitcher"
import Profile from "./pages/Profile"

function App() {
  return (
    <div className="p-6">
      {/* tombol switcher */}
      <div className="flex justify-end mb-4">
        <ThemeSwitcher />
      </div>

      {/* halaman profil */}
      <Profile />
    </div>
  )
}

export default App

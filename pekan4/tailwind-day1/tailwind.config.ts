import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class", // penting untuk mode gelap
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // pastikan mencakup semua file TSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config

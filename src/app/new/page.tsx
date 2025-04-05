"use client";
import { useThemeContext } from "../../../context/ThemeContext";

export default function Home() {
  const { dark, toggleTheme } = useThemeContext();

  return (
    <div className={`min-h-screen flex items-center justify-center ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Theme is {dark ? "Dark 🌙" : "Light ☀️"}</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

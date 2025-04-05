"use client";
import { useThemeContext } from "../../../context/ThemeContext";

export default function Home() {
  const { dark, toggleTheme } = useThemeContext();

  return (
    <div className={`min-h-screen flex items-center justify-center ${dark ? "bg-blue-500 text-amber-800" : "bg-lime-300 text-emerald-800"}`}>
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Theme is {dark ? "Blue 🌙" : "Lime ☀️"}</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

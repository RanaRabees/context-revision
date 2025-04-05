"use client";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeCTXProvider({ children }) {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

"use client";
import { createContext, useState, useContext } from "react";

const SubtractContext = createContext();

export function SubtractCTXProvider({ children }) {
  const [result, setResult] = useState(0);
  const subtract = (a, b) => setResult(a - b);

  return (
    <SubtractContext.Provider value={{ result, subtract }}>
      {children}
    </SubtractContext.Provider>
  );
}

export function useSubtractContext() {
  return useContext(SubtractContext);
}
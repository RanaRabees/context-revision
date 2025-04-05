"use client"
import { createContext, useState, useContext } from "react";

const MultiplyContext = createContext();

export function MultiplyCTXProvider({ children }) {
  const [product, setProduct] = useState(1);
  const multiply = (a, b) => setProduct(a * b);

  return (
    <MultiplyContext.Provider value={{ product, multiply }}>
      {children}
    </MultiplyContext.Provider>
  );
}

export function useMultiplyContext() {
  return useContext(MultiplyContext);
}
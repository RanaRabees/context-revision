"use client"
import { createContext, useState, useContext } from "react";

const AddContext = createContext();

export function AddCTXProvider({ children }) {
  const [sum, setSum] = useState(0);
  const add = (a, b) => setSum(a + b);

  return (
    <AddContext.Provider value={{ sum, add }}>
      {children}
    </AddContext.Provider>
  );
}

export function useAddContext() {
  return useContext(AddContext);
}

"use client"
import { createContext, useState, useContext } from "react";

const DivideContext = createContext();

export function DivideCTXProvider({ children }) {
  const [quotient, setQuotient] = useState(1);
  const divide = (a, b) => setQuotient(a / b);

  return (
    <DivideContext.Provider value={{ quotient, divide }}>
      {children}
    </DivideContext.Provider>
  );
}

export function useDivideContext() {
  return useContext(DivideContext);
}

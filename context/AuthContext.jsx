"use client";
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthCTXProvider({ children }) {
  const [user, setUser] = useState();

  const login = (name) => setUser({ name });
  const logout = () => setUser();

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

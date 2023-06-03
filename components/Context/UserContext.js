"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ value: null });

  const updateUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
    } else {
      setUser({ value: null });
    }
  };

  useEffect(() => {
    updateUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("email");
    updateUser();
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

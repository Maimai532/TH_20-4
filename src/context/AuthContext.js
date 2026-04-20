import React, { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext();

// ✅ Helper wrapper giống AsyncStorage API
const Storage = {
  getItem: async (key) => {
    try {
      return await SecureStore.getItemAsync(key);
    } catch {
      return null;
    }
  },
  setItem: async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  },
  removeItem: async (key) => {
    await SecureStore.deleteItemAsync(key);
  },
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Auto login khi mở app
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await Storage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.log("loadUser error:", error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  // ✅ Login — lưu user vào SecureStore
  const login = async (userData) => {
    try {
      await Storage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.log("login error:", error);
    }
  };

  // 🚪 Logout — xóa user khỏi SecureStore
  const logout = async () => {
    try {
      await Storage.removeItem("user");
    } catch (error) {
      console.log("logout error:", error);
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
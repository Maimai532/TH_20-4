import React, { createContext, useState, useEffect } from 'react';
import { getData, setData, removeData } from '../services/storageService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Auto login khi mở app
  useEffect(() => {
    const loadUser = async () => {
      try {
        const stored = await getData('user');
        if (stored) setUser(stored);
      } catch (e) {
        console.log('[AuthContext] loadUser error:', e);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  // ✅ Login
  const login = async (userData) => {
    try {
      await setData('user', userData);
      setUser(userData);
    } catch (e) {
      console.log('[AuthContext] login error:', e);
    }
  };

  // 🚪 Logout
  const logout = async () => {
    try {
      await removeData('user');
    } catch (e) {
      console.log('[AuthContext] logout error:', e);
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
import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const FavoritesContext = createContext();

const FAV_KEY = 'favorites_data';

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // 🔥 Load khi mở app
  useEffect(() => {
    const load = async () => {
      try {
        const stored = await SecureStore.getItemAsync(FAV_KEY);
        if (stored) setFavorites(JSON.parse(stored));
      } catch (e) {
        console.log('Load favorites error:', e);
      }
    };
    load();
  }, []);

  // 💾 Lưu mỗi khi favorites thay đổi
  useEffect(() => {
    const save = async () => {
      try {
        await SecureStore.setItemAsync(FAV_KEY, JSON.stringify(favorites));
      } catch (e) {
        console.log('Save favorites error:', e);
      }
    };
    save();
  }, [favorites]);

  // ➕ Thêm / ➖ Xóa toggle
  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev.filter((item) => item.id !== product.id);
      return [...prev, product];
    });
  };

  // ✅ Kiểm tra đã yêu thích chưa
  const isFavorite = (id) => favorites.some((item) => item.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
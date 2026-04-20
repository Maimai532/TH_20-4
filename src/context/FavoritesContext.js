import React, { createContext, useState, useEffect } from 'react';
import { getData, setData } from '../services/storageService';

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // 🔥 Load khi mở app
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const stored = await getData('favorites');
        if (stored) setFavorites(stored);
      } catch (e) {
        console.log('[FavoritesContext] loadFavorites error:', e);
      }
    };
    loadFavorites();
  }, []);

  // 💾 Lưu mỗi khi favorites thay đổi
  useEffect(() => {
    const saveFavorites = async () => {
      try {
        await setData('favorites', favorites);
      } catch (e) {
        console.log('[FavoritesContext] saveFavorites error:', e);
      }
    };
    saveFavorites();
  }, [favorites]);

  // ❤️ Toggle thêm/xóa
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
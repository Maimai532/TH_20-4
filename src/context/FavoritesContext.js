import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    const exists = favorites.find(item => item.id === product.id);

    if (exists) {
      // ❌ bỏ yêu thích
      setFavorites(favorites.filter(item => item.id !== product.id));
    } else {
      // ❤️ thêm yêu thích
      setFavorites([...favorites, product]);
    }
  };

  const isFavorite = (id) => {
    return favorites.some(item => item.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
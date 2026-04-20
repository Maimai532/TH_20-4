import React from 'react';
import { CartProvider } from './src/context/CartContext';
import AppNavigator from './src/navigation/AppNavigator';
import { FavoritesProvider } from './src/context/FavoritesContext.js';

export default function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <AppNavigator />
      </CartProvider>
    </FavoritesProvider>
  );
}
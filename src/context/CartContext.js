import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const CartContext = createContext();

const CART_KEY = 'cart_data';

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 🔥 Load giỏ hàng khi mở app
  useEffect(() => {
    const loadCart = async () => {
      try {
        const stored = await SecureStore.getItemAsync(CART_KEY);
        if (stored) setCart(JSON.parse(stored));
      } catch (e) {
        console.log('Load cart error:', e);
      }
    };
    loadCart();
  }, []);

  // 💾 Lưu mỗi khi cart thay đổi
  useEffect(() => {
    const saveCart = async () => {
      try {
        await SecureStore.setItemAsync(CART_KEY, JSON.stringify(cart));
      } catch (e) {
        console.log('Save cart error:', e);
      }
    };
    saveCart();
  }, [cart]);

  // ➕ Thêm sản phẩm
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // ➕➖ Tăng/giảm số lượng (qty = 0 thì tự xóa)
  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: item.qty + delta } : item)
        .filter((item) => item.qty > 0)
    );
  };

  // 🗑️ Xóa item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 🧹 Xóa toàn bộ giỏ (dùng sau khi đặt hàng)
  const clearCart = async () => {
    setCart([]);
    await SecureStore.deleteItemAsync(CART_KEY);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}
import React, { createContext, useState, useEffect } from 'react';
import { getData, setData, removeData } from '../services/storageService';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 🔥 Load khi mở app
  useEffect(() => {
    const loadCart = async () => {
      try {
        const stored = await getData('cart');
        if (stored) setCart(stored);
      } catch (e) {
        console.log('[CartContext] loadCart error:', e);
      }
    };
    loadCart();
  }, []);

  // 💾 Lưu mỗi khi cart thay đổi
  useEffect(() => {
    const saveCart = async () => {
      try {
        await setData('cart', cart);
      } catch (e) {
        console.log('[CartContext] saveCart error:', e);
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

  // ➕➖ Tăng/giảm số lượng
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

  // 🧹 Xóa toàn bộ giỏ
  const clearCart = async () => {
    try {
      setCart([]);
      await removeData('cart');
    } catch (e) {
      console.log('[CartContext] clearCart error:', e);
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}
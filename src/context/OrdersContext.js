import React, { createContext, useState, useEffect } from 'react';
import { getData, setData } from '../services/storageService';

export const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // 👈 tránh overwrite

  // 🔥 Load dữ liệu khi mở app
  useEffect(() => {
    const loadOrders = async () => {
      try {
        const stored = await getData('orders');
        if (stored) setOrders(stored);
      } catch (e) {
        console.log('[OrdersContext] loadOrders error:', e);
      } finally {
        setIsLoaded(true); // 👈 đảm bảo load xong
      }
    };
    loadOrders();
  }, []);

  // 💾 Lưu khi orders thay đổi (sau khi load xong)
  useEffect(() => {
    if (!isLoaded) return;

    const saveOrders = async () => {
      try {
        await setData('orders', orders);
      } catch (e) {
        console.log('[OrdersContext] saveOrders error:', e);
      }
    };

    saveOrders();
  }, [orders, isLoaded]);

  // ➕ Thêm đơn hàng
  const placeOrder = (cart, total) => {
    const newOrder = {
      id: Date.now().toString(),
      items: cart,
      total,
      date: new Date().toISOString(),
      status: 'Accepted',
    };

    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  // ❌ Xoá đơn hàng
  const removeOrder = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        placeOrder,
        removeOrder, // 👈 QUAN TRỌNG
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
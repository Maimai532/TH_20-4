import React, { createContext, useState, useEffect } from 'react';
import { getData, setData } from '../services/storageService';

export const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  // 🔥 Load khi mở app
  useEffect(() => {
    const loadOrders = async () => {
      try {
        const stored = await getData('orders');
        if (stored) setOrders(stored);
      } catch (e) {
        console.log('[OrdersContext] loadOrders error:', e);
      }
    };
    loadOrders();
  }, []);

  // 💾 Lưu mỗi khi orders thay đổi
  useEffect(() => {
    const saveOrders = async () => {
      try {
        await setData('orders', orders);
      } catch (e) {
        console.log('[OrdersContext] saveOrders error:', e);
      }
    };
    saveOrders();
  }, [orders]);

  // ➕ Thêm đơn hàng mới
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

  return (
    <OrdersContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}
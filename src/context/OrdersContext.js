import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const OrdersContext = createContext();

const ORDERS_KEY = 'orders_data';

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  // 🔥 Load khi mở app
  useEffect(() => {
    const load = async () => {
      try {
        const stored = await SecureStore.getItemAsync(ORDERS_KEY);
        if (stored) setOrders(JSON.parse(stored));
      } catch (e) {
        console.log('Load orders error:', e);
      }
    };
    load();
  }, []);

  // 💾 Lưu mỗi khi orders thay đổi
  useEffect(() => {
    const save = async () => {
      try {
        await SecureStore.setItemAsync(ORDERS_KEY, JSON.stringify(orders));
      } catch (e) {
        console.log('Save orders error:', e);
      }
    };
    save();
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
    setOrders((prev) => [newOrder, ...prev]); // mới nhất lên đầu
    return newOrder;
  };

  return (
    <OrdersContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}
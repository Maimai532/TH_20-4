import React, { useContext } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  Image, StatusBar, TouchableOpacity,
} from 'react-native';
import { OrdersContext } from '../context/OrdersContext';

export default function OrdersScreen({ navigation }) {
  const { orders, removeOrder } = useContext(OrdersContext);

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString('vi-VN', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
      </View>

      {orders.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>No orders yet 📦</Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {orders.map((order) => (
            <View key={order.id} style={styles.orderCard}>

              {/* HEADER */}
              <View style={styles.orderHeader}>
                <Text style={styles.orderId}>#{order.id.slice(-6)}</Text>

                <View style={styles.rightHeader}>
                  <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{order.status}</Text>
                  </View>

                  {/* ❌ Nút xoá */}
                  <TouchableOpacity
                    style={styles.deleteBtn}
                    onPress={() => removeOrder(order.id)}
                  >
                    <Text style={styles.deleteText}>✕</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.orderDate}>{formatDate(order.date)}</Text>

              {/* SẢN PHẨM */}
              <View style={styles.itemsRow}>
                {order.items.slice(0, 3).map((item) => (
                  <Image
                    key={item.id}
                    source={item.image}
                    style={styles.itemThumb}
                    resizeMode="contain"
                  />
                ))}
                {order.items.length > 3 && (
                  <View style={styles.moreBox}>
                    <Text style={styles.moreText}>
                      +{order.items.length - 3}
                    </Text>
                  </View>
                )}
              </View>

              {/* TÊN */}
              <Text style={styles.itemNames} numberOfLines={1}>
                {order.items.map((i) => i.name).join(', ')}
              </Text>

              {/* FOOTER */}
              <View style={styles.orderFooter}>
                <Text style={styles.totalLabel}>
                  {order.items.reduce((s, i) => s + i.qty, 0)} items
                </Text>
                <Text style={styles.totalPrice}>${order.total}</Text>
              </View>

            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },

  header: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#181725' },

  emptyBox: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 16, color: '#999' },

  orderCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 18,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },

  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  orderId: { fontSize: 15, fontWeight: '700', color: '#233953' },

  statusBadge: {
    backgroundColor: '#E8F5E9',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },

  statusText: {
    fontSize: 12,
    color: '#095826',
    fontWeight: '600',
  },

  deleteBtn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#8b8b8b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },

  orderDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 12,
    marginTop: 4,
  },

  itemsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },

  itemThumb: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#F2F3F2',
  },

  moreBox: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#F2F3F2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  moreText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#555',
  },

  itemNames: {
    fontSize: 13,
    color: '#7C7C7C',
    marginBottom: 12,
  },

  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F2F3F2',
    paddingTop: 12,
  },

  totalLabel: { fontSize: 14, color: '#999' },

  totalPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#181725',
  },
});
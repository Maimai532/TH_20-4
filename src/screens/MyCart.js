import React, { useContext } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, Image, StatusBar,
} from 'react-native';
import { CartContext } from '../context/CartContext';

export default function MyCart({ navigation }) {
  const { cart, updateQty, removeItem } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty, 0
  ).toFixed(2);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* ── Header ── */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {cart.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>Cart is empty 🛒</Text>
        </View>
      ) : (
        <>
          <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
            {cart.map((item) => (
              <View key={item.id} style={styles.cartItem}>

                {/* Ảnh sản phẩm */}
                <Image source={item.image} style={styles.itemImage} resizeMode="contain" />

                {/* Thông tin */}
                <View style={styles.itemInfo}>

                  {/* Tên + nút X */}
                  <View style={styles.rowBetween}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <TouchableOpacity
                      onPress={() => removeItem(item.id)}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      <Text style={styles.removeIcon}>✕</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Chi tiết */}
                  <Text style={styles.itemDetail}>{item.detail}, Price</Text>

                  {/* Qty + Giá */}
                  <View style={styles.rowBetween}>
                    <View style={styles.qtyRow}>
                      {/* Nút − tròn viền xám */}
                      <TouchableOpacity
                        style={styles.qtyBtnGray}
                        onPress={() => updateQty(item.id, -1)}
                      >
                        <Text style={styles.qtyMinus}>−</Text>
                      </TouchableOpacity>

                      {/* Số lượng */}
                      <Text style={styles.qtyText}>{item.qty}</Text>

                      {/* Nút + tròn viền xanh */}
                      <TouchableOpacity
                        style={styles.qtyBtnGreen}
                        onPress={() => updateQty(item.id, 1)}
                      >
                        <Text style={styles.qtyPlus}>+</Text>
                      </TouchableOpacity>
                    </View>

                    <Text style={styles.itemPrice}>
                      ${(item.price * item.qty).toFixed(2)}
                    </Text>
                  </View>

                </View>
              </View>
            ))}
          </ScrollView>

          {/* ── Checkout ── */}
          <View style={styles.footer}>
            <TouchableOpacity 
              style={styles.checkoutBtn}
              onPress={() => navigation.navigate('Checkout')}
            
            >
              <Text style={styles.checkoutText}>Go to Checkout</Text>
              <View style={styles.totalBadge}>
                <Text style={styles.checkoutTotal}>${total}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#181725' },

  emptyBox: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 16, color: '#999' },

  list: { flex: 1 },

  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },

  itemImage: {
    width: 77,
    height: 77,
    marginRight: 16,
  },

  itemInfo: { flex: 1 },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#181725',
    flex: 1,
  },

  removeIcon: { fontSize: 15, color: '#B3B3B3' },

  itemDetail: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 5,
    marginBottom: 14,
  },

  // ── Qty ──
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  qtyBtnGray: {
    width: 40,
    height: 40,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  qtyBtnGreen: {
    width: 40,
    height: 40,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#53B175',
    alignItems: 'center',
    justifyContent: 'center',
  },

  qtyMinus: { fontSize: 22, color: '#181725', lineHeight: 26 },
  qtyPlus:  { fontSize: 24, color: '#53B175', lineHeight: 28 },

  qtyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
    minWidth: 20,
    textAlign: 'center',
  },

  itemPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#181725',
  },

  // ── Footer ──
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
  },

  checkoutBtn: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    paddingVertical: 20,
    paddingHorizontal: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  totalBadge: {
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },

  checkoutTotal: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});
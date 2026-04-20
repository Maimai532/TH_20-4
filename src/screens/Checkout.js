import React, { useContext } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, Image, StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../context/CartContext';
import { OrdersContext } from '../context/OrdersContext';

export default function Checkout({ navigation }) {
  const { cart, clearCart } = useContext(CartContext);
  const { placeOrder } = useContext(OrdersContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  const handlePlaceOrder = () => {
    placeOrder(cart, total);   // ✅ lưu đơn hàng
    clearCart();               // ✅ xóa giỏ sau khi đặt
    navigation.navigate('OrderAccepted');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {/* Cart items preview */}
      <ScrollView style={styles.cartList} showsVerticalScrollIndicator={false}>
        {cart.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDetail}>{item.detail}, Price</Text>
            </View>
            <Text style={styles.itemQty}>x{item.qty}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Checkout Bottom Sheet */}
      <View style={styles.sheet}>
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetTitle}>Checkout</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={22} color="#333" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowLabel}>Delivery</Text>
          <View style={styles.rowRight}>
            <Text style={styles.rowValue}>Select Method</Text>
            <Ionicons name="chevron-forward" size={16} color="#999" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowLabel}>Payment</Text>
          <View style={styles.rowRight}>
            <View style={styles.cardIcon}>
              <Ionicons name="card" size={16} color="#fff" />
            </View>
            <Ionicons name="chevron-forward" size={16} color="#999" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowLabel}>Promo Code</Text>
          <View style={styles.rowRight}>
            <Text style={styles.rowValue}>Pick discount</Text>
            <Ionicons name="chevron-forward" size={16} color="#999" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowLabel}>Total Cost</Text>
          <View style={styles.rowRight}>
            <Text style={styles.rowTotal}>${total}</Text>
            <Ionicons name="chevron-forward" size={16} color="#999" />
          </View>
        </TouchableOpacity>

        <Text style={styles.terms}>
          By placing an order you agree to our{' '}
          <Text style={styles.termsLink}>Terms</Text>
          {' '}And{' '}
          <Text style={styles.termsLink}>Conditions</Text>
        </Text>

        <TouchableOpacity style={styles.placeBtn} onPress={handlePlaceOrder}>
          <Text style={styles.placeBtnText}>Place Order</Text>
        </TouchableOpacity>
      </View>
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

  cartList: { flex: 1, paddingHorizontal: 20, paddingTop: 10 },

  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  itemImage: { width: 60, height: 60, marginRight: 14 },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 15, fontWeight: '600', color: '#181725' },
  itemDetail: { fontSize: 13, color: '#7C7C7C', marginTop: 3 },
  itemQty: { fontSize: 14, color: '#7C7C7C', fontWeight: '500' },

  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
    paddingBottom: 36,
    elevation: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },

  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sheetTitle: { fontSize: 22, fontWeight: '700', color: '#181725' },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F3F2',
  },
  rowLabel: { fontSize: 16, color: '#7C7C7C' },
  rowRight: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  rowValue: { fontSize: 16, color: '#181725', fontWeight: '500' },
  rowTotal: { fontSize: 16, color: '#181725', fontWeight: '700' },

  cardIcon: {
    backgroundColor: '#F44336',
    borderRadius: 4,
    padding: 4,
    width: 28,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  terms: { fontSize: 13, color: '#7C7C7C', marginTop: 16, marginBottom: 20 },
  termsLink: { fontWeight: '700', color: '#181725' },

  placeBtn: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    paddingVertical: 20,
    alignItems: 'center',
  },
  placeBtnText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});
import React, { useContext } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, Image, StatusBar,
} from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext';
import { CartContext } from '../context/CartContext';

export default function Favorites({ navigation }) {
  const { favorites } = useContext(FavoritesContext);
  const { addToCart } = useContext(CartContext);

  const addAllToCart = () => {
    favorites.forEach((item) => addToCart(item));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* ── Header ── */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourrite</Text>
      </View>

      {favorites.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>No favorites yet </Text>
        </View>
      ) : (
        <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
          {favorites.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.favItem}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('ProductDetail', { product: item })}
            >
              {/* Ảnh */}
              <Image source={item.image} style={styles.itemImage} resizeMode="contain" />

              {/* Tên + detail */}
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDetail}>{item.detail}, Price</Text>
              </View>

              {/* Giá + mũi tên > */}
              <Text style={styles.itemPrice}>${Number(item.price).toFixed(2)}</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* ── Add All To Cart ── */}
      {favorites.length > 0 && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.addAllBtn} onPress={addAllToCart}>
            <Text style={styles.addAllText}>Add All To Cart</Text>
          </TouchableOpacity>
        </View>
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

  favItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },

  itemImage: {
    width: 67,
    height: 67,
    marginRight: 16,
  },

  itemInfo: { flex: 1 },

  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#181725',
  },

  itemDetail: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 4,
  },

  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#181725',
    marginRight: 8,
  },

  arrow: {
    fontSize: 26,
    color: '#B3B3B3',
    lineHeight: 30,
  },

  // ── Footer ──
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
  },

  addAllBtn: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    paddingVertical: 20,
    alignItems: 'center',
  },

  addAllText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
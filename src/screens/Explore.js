import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import { products, categories, home, beverages } from '../data/data';
import { CartContext } from '../context/CartContext';

const allProducts = [...products, ...home, ...beverages];

export default function Explore({ navigation, route }) {
  const { addToCart } = useContext(CartContext);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [activeFilters, setActiveFilters] = useState({ categories: [], brands: [] });
  const [isFocused, setIsFocused] = useState(false);

  // Nhận filter trả về từ Filters screen
  useEffect(() => {
    if (route?.params?.filters) {
      setActiveFilters(route.params.filters);
    }
  }, [route?.params?.filters]);

  // 🔍 SEARCH + FILTER
  useEffect(() => {
    const keyword = query.trim().toLowerCase();

    if (keyword === '' && activeFilters.categories.length === 0 && activeFilters.brands.length === 0) {
      setResults([]);
      return;
    }

    let filtered = allProducts;

    if (keyword.length > 0) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(keyword));
    }
    if (activeFilters.categories.length > 0) {
      filtered = filtered.filter(p => activeFilters.categories.includes(p.category));
    }
    if (activeFilters.brands.length > 0) {
      filtered = filtered.filter(p => activeFilters.brands.includes(p.brand));
    }

    setResults(filtered);
  }, [query, activeFilters]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Products</Text>

      {/* 🔍 SEARCH + FILTER */}
      <View style={styles.searchRow}>
        <View style={[styles.searchBox, isFocused && styles.searchBoxFocused]}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Store"
            value={query}
            onChangeText={setQuery}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>

        {/* ⚙ FILTER */}
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => navigation.navigate('Filters', { returnScreen: 'Explore' })}
        >
          <Text style={styles.filterIcon}>⚙</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Xác định trạng thái: idle = chưa search và chưa filter */}
        {(() => {
          const isIdle = query.trim() === ''
            && activeFilters.categories.length === 0
            && activeFilters.brands.length === 0;

          if (isIdle) {

            return (
              <View style={styles.categoryGrid}>
                {categories.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.box, { backgroundColor: item.color, borderColor: item.border }]}
                    onPress={() => {
                      if (item.name === 'Beverages') {
                        navigation.navigate('Beverages');
                      }
                    }}
                  >
                    <Image source={item.img} style={styles.img} />
                    <Text style={styles.text}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            );
          }

          if (results.length === 0) {
            // ❌ KHÔNG CÓ KẾT QUẢ
            return (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyIcon}>🔍</Text>
                <Text style={styles.emptyText}>No products found</Text>
              </View>
            );
          }

          // ✅ CÓ KẾT QUẢ
          return (
            <View style={styles.resultGrid}>
              {results.map((item) => (
                <View key={item.id} style={styles.card}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => navigation.navigate('ProductDetail', { product: item })}
                  >
                    <Image source={item.image} style={styles.productImage} resizeMode="contain" />
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productDetail}>{item.detail}, Price</Text>
                  </TouchableOpacity>
                  <View style={styles.priceRow}>
                    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    <TouchableOpacity style={styles.addBtn} onPress={() => addToCart(item)}>
                      <Text style={styles.addBtnText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          );
        })()}

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20,
    backgroundColor: '#fff' 
  },

  title: { 
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10
  },

  // SEARCH + FILTER
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 45,
  },

  searchBoxFocused: {
    height: 45,
    backgroundColor: '#d5f2d3',
  },

  searchIcon: {
    marginRight: 8,
    color: '#888'
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    outlineStyle: 'none',
  },

  filterBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F2F3F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterIcon: {
    fontSize: 18
  },

  // CATEGORY
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  box: {
    width: '48%',
    height: 200,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderWidth: 1,
  },

  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10
  },

  text: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },

  //RESULT
  resultGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    gap: 12,
  },

  card: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 8
  },

  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222'
  },

  productDetail: {
    fontSize: 12,
    color: '#999',
    marginTop: 2
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222'
  },

  addBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center'
  },

  addBtnText: {
    color: '#fff',
    fontSize: 20
  },

  // EMPTY
  emptyContainer: {
    alignItems: 'center',
    marginTop: 60
  },

  emptyIcon: {
    fontSize: 40,
    marginBottom: 10
  },

  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555'
  }
});
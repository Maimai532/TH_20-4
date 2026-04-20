import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { products } from '../data/data';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Search({ navigation, route }) {
  const { addToCart } = useContext(CartContext);
  const [query, setQuery]         = useState('');
  const [results, setResults]     = useState(products); // hiển thị toàn bộ lúc đầu
  const [activeFilters, setActiveFilters] = useState({ categories: [], brands: [] });

  useEffect(() => {
    if (route?.params?.filters) {
      setActiveFilters(route.params.filters);
    }
  }, [route?.params?.filters]);


  useEffect(() => {
    applySearchAndFilter(query, activeFilters);
  }, [query, activeFilters]);
 

  const applySearchAndFilter = (text, filters) => {
    let filtered = products;

    // 1. Tìm theo tên sản phẩm
    const keyword = text.trim().toLowerCase();
    if (keyword.length > 0) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(keyword)
      );
    }

    // 2. Lọc theo category
    if (filters.categories.length > 0) {
      filtered = filtered.filter((p) =>
        filters.categories.includes(p.category)
      );
    }

    // 3. Lọc theo brand
    if (filters.brands.length > 0) {
      filtered = filtered.filter((p) =>
        filters.brands.includes(p.brand)
      );
    }

    setResults(filtered);
  };

  const handleQueryChange = (text) => setQuery(text);
  const clearQuery = () => setQuery('');

  const goToFilters = () =>
    navigation.navigate('Filters', {
      currentFilters: activeFilters,
      returnScreen: 'Search',
    });


  const filterCount = activeFilters.categories.length + activeFilters.brands.length;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* ── Search Bar ── */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            value={query}
            onChangeText={handleQueryChange}
            placeholder="Search products..."
            placeholderTextColor="#aaa"
            autoCorrect={false}
            returnKeyType="search"
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={clearQuery} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Filter button + badge số filter đang bật */}
        <TouchableOpacity style={styles.filterBtn} onPress={goToFilters}>
          <Text style={styles.filterIcon}>⚙</Text>
          {filterCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{filterCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* ── Kết quả ── */}
      {results.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🔍</Text>
          <Text style={styles.emptyText}>No products found</Text>
          <Text style={styles.emptySubText}>Try a different keyword or clear filters</Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {results.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.image} style={styles.productImage} resizeMode="contain" />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDetail}>{item.detail}, Price</Text>
              <View style={styles.priceRow}>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                <TouchableOpacity
                  style={styles.addBtn}
                  onPress={() => addToCart(item)}
                >
                  <Text style={styles.addBtnText}>+</Text>
                </TouchableOpacity>
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

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    gap: 10,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon:  { fontSize: 16, marginRight: 8, color: '#888' },
  searchInput: { flex: 1, fontSize: 15, color: '#333' },
  clearIcon:   { fontSize: 16, color: '#999', padding: 4 },

  filterBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIcon: { fontSize: 20 },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: '700' },

  grid: { flexDirection: 'row', flexWrap: 'wrap', padding: 12, gap: 12 },
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
  productImage:  { width: '100%', height: 100, marginBottom: 8 },
  productName:   { fontSize: 14, fontWeight: '600', color: '#222' },
  productDetail: { fontSize: 12, color: '#999', marginTop: 2 },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price:      { fontSize: 15, fontWeight: '700', color: '#222' },
  addBtn:     { width: 32, height: 32, borderRadius: 16, backgroundColor: '#4CAF50', alignItems: 'center', justifyContent: 'center' },
  addBtnText: { color: '#fff', fontSize: 20, lineHeight: 28 },

  emptyContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 60 },
  emptyIcon:      { fontSize: 48, marginBottom: 12 },
  emptyText:      { fontSize: 18, fontWeight: '600', color: '#555' },
  emptySubText:   { fontSize: 13, color: '#aaa', marginTop: 6 },
});
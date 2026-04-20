import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

const CATEGORIES = ['Eggs', 'Noodles & Pasta', 'Chips & Crisps', 'Fast Food'];
const BRANDS     = ['Individual Callection', 'Cocola', 'Ifad', 'Kazi Farmas'];

export default function Filters({ navigation, route }) {
  // Khởi tạo từ filter hiện tại được truyền sang (nếu có)
  const currentFilters = route?.params?.currentFilters ?? { categories: [], brands: [] };

  const [selectedCategories, setSelectedCategories] = useState(currentFilters.categories);
  const [selectedBrands, setSelectedBrands]         = useState(currentFilters.brands);

  // Cập nhật nếu params thay đổi
  useEffect(() => {
    if (route?.params?.currentFilters) {
      setSelectedCategories(route.params.currentFilters.categories);
      setSelectedBrands(route.params.currentFilters.brands);
    }
  }, [route?.params?.currentFilters]);

  const toggle = (list, setList, value) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  const applyFilter = () => {
    const returnScreen = route?.params?.returnScreen ?? 'Search';
    navigation.navigate(returnScreen, {
      filters: {
        categories: selectedCategories,
        brands: selectedBrands,
      },
    });
  };

  const totalSelected = selectedCategories.length + selectedBrands.length;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeBtn}>
          <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
        {totalSelected > 0 ? (
          <TouchableOpacity onPress={clearAll}>
            <Text style={styles.clearAllText}>Clear all</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 60 }} />
        )}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          {CATEGORIES.map((cat) => {
            const checked = selectedCategories.includes(cat);
            return (
              <TouchableOpacity
                key={cat}
                style={styles.checkRow}
                onPress={() => toggle(selectedCategories, setSelectedCategories, cat)}
                activeOpacity={0.7}
              >
                <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
                  {checked && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={[styles.checkLabel, checked && styles.checkLabelActive]}>{cat}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Brands */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Brand</Text>
          {BRANDS.map((brand) => {
            const checked = selectedBrands.includes(brand);
            return (
              <TouchableOpacity
                key={brand}
                style={styles.checkRow}
                onPress={() => toggle(selectedBrands, setSelectedBrands, brand)}
                activeOpacity={0.7}
              >
                <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
                  {checked && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={[styles.checkLabel, checked && styles.checkLabelActive]}>{brand}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Apply Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.applyBtn} onPress={applyFilter}>
          <Text style={styles.applyBtnText}>
            Apply Filter{totalSelected > 0 ? ` (${totalSelected})` : ''}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  closeBtn:     { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  closeIcon:    { fontSize: 18, color: '#333' },
  headerTitle:  { fontSize: 18, fontWeight: '700', color: '#222' },
  clearAllText: { fontSize: 14, color: '#4CAF50', fontWeight: '600' },

  content: { flex: 1, padding: 20 },

  section: {
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#222', marginBottom: 16 },

  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  checkboxChecked:  { backgroundColor: '#4CAF50', borderColor: '#4CAF50' },
  checkmark:        { color: '#fff', fontSize: 13, fontWeight: '700' },
  checkLabel:       { fontSize: 15, color: '#555' },
  checkLabelActive: { color: '#4CAF50', fontWeight: '600' },

  footer:    { padding: 20, paddingBottom: 32 },
  applyBtn:  { backgroundColor: '#4CAF50', borderRadius: 16, paddingVertical: 16, alignItems: 'center' },
  applyBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
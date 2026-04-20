import React, { useContext } from 'react';
import {
  FlatList, Text, Image,
  TouchableOpacity, StyleSheet, View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { beverages } from '../data/data';
import { CartContext } from '../context/CartContext';

export default function Beverages({ navigation }) {
  const { addToCart } = useContext(CartContext);

  return (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    
    {/* HEADER */}
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={26} />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>Beverages</Text>

      <Ionicons name="options-outline" size={22} />
    </View>

    {/* LIST */}
    <FlatList
      data={beverages}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Image source={item.image} style={styles.img} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.sub}>{item.detail}, Price</Text>
          </TouchableOpacity>

          <View style={styles.row}>
            <Text style={styles.price}>${Number(item.price).toFixed(2)}</Text>
            <TouchableOpacity style={styles.plus} onPress={() => addToCart(item)}>
              <Text style={{ color: '#fff', fontSize: 20 }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  </View>
);
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 12,
    elevation: 4,
    height: 250,
    borderWidth: 1,
    borderColor: '#a7a7a7',
    
  },

  img: { width: '100%', height: 100, resizeMode: 'contain', marginBottom:40, marginTop:10 },
  name: { fontWeight: '600' },
  sub: { color: '#999', fontSize: 12 },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  price: { fontWeight: 'bold' },

  plus: {
    backgroundColor: '#53B175',
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
 
  },

  header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 16,
  paddingTop: 50,
  paddingBottom: 10
},

headerTitle: {
  fontSize: 18,
  fontWeight: '600'
},
});
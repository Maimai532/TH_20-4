import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

import { home } from '../data/data';
import { CartContext } from '../context/CartContext';

export default function Home({ navigation }) {
  const { addToCart } = useContext(CartContext);
  const fruits = home.filter(i => i.category === 'Fruits');
  const vegetables = home.filter(i => i.category === 'Vegetables');
  const meat = home.filter(i => i.category === 'Meat');
  const groceries = home.filter(i => i.category === 'Groceries');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >

      {/* LOGO */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />

      {/* LOCATION */}
      <Text style={styles.location}>Nguyễn Nhật Mai - 23810301266</Text>

      {/* SEARCH */}
      <View style={styles.search}>
        <Text style={{ color: '#999' }}>Search Store</Text>
      </View>

      {/* BANNER */}
      <Image
        source={require('../../assets/images/banner.png')}
        style={styles.banner}
      />

      {/* FRUITS */}
      <Section title="Fruits" data={fruits} navigation={navigation} addToCart={addToCart} />

      {/* VEGETABLES */}
      <Section title="Vegetables" data={vegetables} navigation={navigation} addToCart={addToCart} />
      
      {/* GROCERIES */}
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>Groceries</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <View style={styles.groceryRow}>
        <View style={[styles.groceryBox, { backgroundColor: '#F8E9D2' }]}>
          <Image
            source={require('../../assets/images/pulses.png')}
            style={styles.groceryImg}
          />
          <Text style={styles.groceryText}>Pulses</Text>
        </View>

        <View style={[styles.groceryBox, { backgroundColor: '#D8F1E5' }]}>
          <Image
            source={require('../../assets/images/rice.png')}
            style={styles.groceryImg}
          />
          <Text style={styles.groceryText}>Rice</Text>
        </View>
      </View>

      {/* MEAT */}
      <Section title="Meat" data={meat} navigation={navigation} addToCart={addToCart} />




    </ScrollView>
  );
}

const Section = ({ title, data, navigation, addToCart }) => (
  <>
    <View style={styles.sectionHeader}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.seeAll}>See all</Text>
    </View>

    <View style={styles.row}>
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
     
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.sub}>{item.detail}</Text>
          </TouchableOpacity>

      
          <View style={styles.bottom}>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.plus}
              onPress={() => addToCart(item)}
            >
              <Text style={{ color: '#fff', fontSize: 18 }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  </>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },

  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10
  },

  location: {
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 10
  },

  search: {
    backgroundColor: '#F2F3F2',
    padding: 14,
    borderRadius: 15
  },

  banner: {
    width: '100%',
    height: 130,
    borderRadius: 15,
    marginVertical: 15
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 5
  },

  title: {
    fontSize: 18,
    fontWeight: '600'
  },

  seeAll: {
    color: '#d76400'
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#7992b1',
    padding: 12,
    marginVertical: 8
  },

  image: {
    width: '60%',
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10
  },

  name: {
    fontWeight: '600'
  },

  sub: {
    color: '#999',
    fontSize: 12,
    marginBottom: 10
  },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  price: {
    fontWeight: 'bold'
  },

  plus: {
    backgroundColor: '#354d6a',
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },


    groceryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },

  groceryBox: {
    width: '48%',
    height: 90,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },

  groceryImg: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 30
  },

  groceryText: {
    fontWeight: '600',
    fontSize: 16
  }
});
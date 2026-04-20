import React, { useState,useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FavoritesContext } from '../context/FavoritesContext.js';

export default function ProductDetail({ route, navigation }) {
  const { product } = route.params;
  const [qty, setQty] = useState(1);
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
  const liked = isFavorite(product.id);

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} />
        </TouchableOpacity>

      </View>

      {/* IMAGE */}
      <View style={styles.imgBox}>
        <Image source={product.image} style={styles.img} />
      </View>


    <View style={{ padding: 15 }}>


      {/* NAME + HEART */}
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.sub}>{product.details}</Text>
        </View>

        <TouchableOpacity onPress={() => toggleFavorite(product)}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={24}
            color={liked ? "red" : "#555"}
          />
        </TouchableOpacity>
      </View>

      {/* QTY + PRICE */}
      <View style={styles.qtyRow}>
        <View style={styles.qtyBox}>
          <TouchableOpacity onPress={() => qty > 1 && setQty(qty - 1)}>
            <Text style={styles.minus}>−</Text>
          </TouchableOpacity>

          <Text style={styles.qty}>{qty}</Text>

          <TouchableOpacity onPress={() => setQty(qty + 1)}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.price}>${Number(product.price).toFixed(2)}</Text>
      </View>

      {/* DIVIDER */}
      <View style={styles.line} />

      {/* PRODUCT DETAIL */}
      <View style={styles.section}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Product Detail</Text>
          <Ionicons name="chevron-down" size={20} />
        </View>

        <Text style={styles.desc}>
          Apples Are Nutritious. Apples May Be Good For Weight Loss.
          Apples May Be Good For Your Heart. As Part Of A Healthful
          And Varied Diet.
        </Text>
      </View>
    <View style={styles.line} />
      {/* NUTRITIONS */}
      <View style={styles.section}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Nutritions</Text>

          <View style={styles.row}>
            <Text style={styles.tag}>100gr</Text>
            <Ionicons name="chevron-forward" size={18} />
          </View>
        </View>
      </View>
    <View style={styles.line} />
      {/* REVIEW */}
      <View style={styles.section}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Review</Text>

          <View style={styles.row}>
            <Text style={{ color: '#FF6C44' }}>★★★★★</Text>
            <Ionicons name="chevron-forward" size={18} />
          </View>
        </View>
      </View>

      {/* BUTTON */}
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Add To Basket</Text>
      </TouchableOpacity>



      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   

  },

header: {
  position: 'absolute',
  top: 50,
  left: 15,
  right: 15,

  flexDirection: 'row',
  justifyContent: 'space-between',
  zIndex: 10
},

  imgBox: {
    backgroundColor: '#c5c5c54a',
    borderBottomEndRadius:35,
    borderBottomStartRadius:35,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden' ,
    height: 300,
    padding: 50,
  
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  name: {
    fontSize: 22,
    fontWeight: '600'
  },

  sub: {
    color: '#999',
    marginTop: 5
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },

  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    
    height:50,
  },

  minus: {
    fontSize: 20,
    color: '#999',
    paddingHorizontal: 10
  },

  plus: {
    fontSize: 20,
    color: '#53B175',
    paddingHorizontal: 10
  },

  qty: {
    fontSize: 16,
    fontWeight: '500',
    borderColor:'#9d9d9d',
    borderRadius:15,
    borderWidth: 1,
    marginLeft:10,
    marginRight:10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  price: {
    marginLeft: 'auto',
    fontSize: 20,
    fontWeight: 'bold'
  },

  line: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 12
  },

  section: {
    marginBottom: 15
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600'
  },

  desc: {
    color: '#777',
    marginTop: 8,
    lineHeight: 20
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  tag: {
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginRight: 5,
    fontSize: 12
  },

  btn: {
    backgroundColor: '#53B175',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30
  },

  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
  }
});
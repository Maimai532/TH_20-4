import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Image, StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderFailed({ navigation }) {
  return (
    <View style={styles.backdrop}>
      <StatusBar barStyle="dark-content" />

      {/* Modal card */}
      <View style={styles.modal}>

        {/* Close button */}
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={20} color="#333" />
        </TouchableOpacity>

        {/* Grocery bag illustration */}
        <View style={styles.imgCircle}>
          <Image
            source={require('../../assets/images/error.png')}
            style={styles.img}
            resizeMode="contain"
          />
        </View>

        {/* Text */}
        <Text style={styles.title}>Oops! Order Failed</Text>
        <Text style={styles.sub}>Something went terribly wrong.</Text>

        {/* Try Again */}
        <TouchableOpacity
          style={styles.tryBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.tryBtnText}>Please Try Again</Text>
        </TouchableOpacity>

        {/* Back to home */}
        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => navigation.navigate('Shop')}
        >
          <Text style={styles.homeBtnText}>Back to home</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Nền mờ xám (thấy Favourite bên dưới)
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'flex-end',
  },

  // Card trắng bo góc trên
  modal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 28,
    paddingTop: 24,
    paddingBottom: 44,
    alignItems: 'center',
  },

  // Nút X góc trái
  closeBtn: {
    alignSelf: 'flex-start',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F2F3F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  // Vòng tròn nền xanh nhạt chứa ảnh
  imgCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },

  img: {
    width: 160,
    height: 160,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#181725',
    marginBottom: 10,
    textAlign: 'center',
  },

  sub: {
    fontSize: 15,
    color: '#7C7C7C',
    marginBottom: 36,
    textAlign: 'center',
  },

  tryBtn: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  tryBtnText: { color: '#fff', fontSize: 18, fontWeight: '600' },

  homeBtn: { paddingVertical: 6 },
  homeBtnText: { fontSize: 16, color: '#181725', fontWeight: '600' },
});
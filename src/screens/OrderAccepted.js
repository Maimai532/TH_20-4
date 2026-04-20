import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { CommonActions } from '@react-navigation/native';

export default function OrderAccepted({ navigation }) {

  const goToCart = () => {

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'CartScreen' }],
      })
    );
  };

  const goToHome = () => {

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'CartScreen' }],
      })
    );
    navigation.navigate('Shop');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={[styles.blob, { backgroundColor: '#FFB3BA', top: -60, left: -60, width: 220, height: 220 }]} />
      <View style={[styles.blob, { backgroundColor: '#B3D9FF', top: 80, right: -80, width: 200, height: 200 }]} />
      <View style={[styles.blob, { backgroundColor: '#B3FFD1', bottom: 200, left: -60, width: 180, height: 180 }]} />
      <View style={[styles.blob, { backgroundColor: '#FFE4B3', bottom: 100, right: -40, width: 160, height: 160 }]} />

      <View style={styles.illustrationArea}>
        <View style={[styles.dot, { backgroundColor: '#53B175', width: 14, height: 14, top: 10, left: '38%' }]} />
        <View style={[styles.dot, { backgroundColor: '#F44336', width: 10, height: 10, top: 30, left: '60%' }]} />
        <View style={[styles.dot, { borderWidth: 2, borderColor: '#9C27B0', width: 12, height: 12, top: 120, left: '15%' }]} />
        <View style={[styles.dot, { borderWidth: 2, borderColor: '#9C27B0', width: 10, height: 10, top: 220, right: '12%' }]} />
        <View style={[styles.dot, { backgroundColor: '#53B175', width: 10, height: 10, bottom: 30, left: '38%' }]} />
        <View style={[styles.dot, { backgroundColor: '#1565C0', width: 12, height: 12, bottom: 10, left: '55%' }]} />

        <View style={styles.curveLine1} />
        <View style={styles.curveLine2} />
        <View style={styles.yellowArc} />

        <View style={styles.checkCircleOuter}>
          <View style={styles.checkCircle}>
            <Text style={styles.checkMark}>✓</Text>
          </View>
        </View>
      </View>

      <Text style={styles.title}>Your Order has been{'\n'}accepted</Text>
      <Text style={styles.sub}>
        Your items has been placed and is on{'\n'}its way to being processed
      </Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.trackBtn} onPress={goToCart}>
          <Text style={styles.trackBtnText}>Track Order</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToHome}>
          <Text style={styles.homeBtnText}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', alignItems: 'center', overflow: 'hidden' },

  blob: { position: 'absolute', borderRadius: 999, opacity: 0.45 },

  illustrationArea: { width: '100%', height: 380, alignItems: 'center', justifyContent: 'center', marginTop: 40 },

  dot: { position: 'absolute', borderRadius: 99 },

  curveLine1: {
    position: 'absolute', left: '14%', top: '52%',
    width: 55, height: 55, borderRadius: 99,
    borderWidth: 3, borderColor: '#2196F3',
    borderTopColor: 'transparent', borderRightColor: 'transparent',
    transform: [{ rotate: '-30deg' }],
  },
  curveLine2: {
    position: 'absolute', right: '13%', top: '20%',
    width: 40, height: 40, borderRadius: 99,
    borderWidth: 3, borderColor: '#F44336',
    borderBottomColor: 'transparent', borderLeftColor: 'transparent',
    transform: [{ rotate: '20deg' }],
  },
  yellowArc: {
    position: 'absolute', right: '10%', bottom: '15%',
    width: 36, height: 36, borderRadius: 99,
    borderWidth: 3, borderColor: '#FFC107',
    borderTopColor: 'transparent', borderLeftColor: 'transparent',
    transform: [{ rotate: '10deg' }],
  },

  checkCircleOuter: {
    width: 160, height: 160, borderRadius: 80,
    backgroundColor: 'rgba(83,177,117,0.15)',
    alignItems: 'center', justifyContent: 'center',
  },
  checkCircle: {
    width: 130, height: 130, borderRadius: 65,
    backgroundColor: '#53B175', alignItems: 'center', justifyContent: 'center',
    shadowColor: '#53B175', shadowOpacity: 0.4, shadowRadius: 16, elevation: 8,
  },
  checkMark: { fontSize: 64, color: '#fff', fontWeight: '700', lineHeight: 72 },

  title: {
    fontSize: 26, fontWeight: '700', color: '#181725',
    textAlign: 'center', lineHeight: 36,
    marginTop: 20, marginBottom: 14, paddingHorizontal: 32,
  },
  sub: { fontSize: 15, color: '#7C7C7C', textAlign: 'center', lineHeight: 22, paddingHorizontal: 40 },

  btnArea: { position: 'absolute', bottom: 48, left: 24, right: 24, alignItems: 'center', gap: 16 },

  trackBtn: { backgroundColor: '#53B175', borderRadius: 19, paddingVertical: 20, width: '100%', alignItems: 'center' },
  trackBtnText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  homeBtnText: { fontSize: 16, color: '#181725', fontWeight: '600' },
});
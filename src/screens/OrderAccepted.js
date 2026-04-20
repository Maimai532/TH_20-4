import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, StatusBar,} from 'react-native';

export default function OrderAccepted({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* ── Gradient background blobs (giả lập bằng View tròn mờ) ── */}
      <View style={[styles.blob, { backgroundColor: '#FFB3BA', top: -60, left: -60, width: 220, height: 220 }]} />
      <View style={[styles.blob, { backgroundColor: '#B3D9FF', top: 80, right: -80, width: 200, height: 200 }]} />
      <View style={[styles.blob, { backgroundColor: '#B3FFD1', bottom: 200, left: -60, width: 180, height: 180 }]} />
      <View style={[styles.blob, { backgroundColor: '#FFE4B3', bottom: 100, right: -40, width: 160, height: 160 }]} />

      {/* ── Khu vực illustration + decorations ── */}
      <View style={styles.illustrationArea}>

        {/* Decorative dots & lines */}
        <View style={[styles.dot, { backgroundColor: '#53B175', width: 14, height: 14, top: 10, left: '38%' }]} />
        <View style={[styles.dot, { backgroundColor: '#F44336', width: 10, height: 10, top: 30, left: '60%' }]} />
        <View style={[styles.dot, { borderWidth: 2, borderColor: '#9C27B0', width: 12, height: 12, top: 120, left: '15%' }]} />
        <View style={[styles.dot, { borderWidth: 2, borderColor: '#9C27B0', width: 10, height: 10, top: 220, right: '12%' }]} />
        <View style={[styles.dot, { backgroundColor: '#53B175', width: 10, height: 10, bottom: 30, left: '38%' }]} />
        <View style={[styles.dot, { backgroundColor: '#1565C0', width: 12, height: 12, bottom: 10, left: '55%' }]} />

        {/* Curved lines */}
        <View style={styles.curveLine1} />
        <View style={styles.curveLine2} />
        <View style={styles.yellowArc} />

        {/* Check circle */}
        <View style={styles.checkCircleOuter}>
          <View style={styles.checkCircle}>
            <Text style={styles.checkMark}>✓</Text>
          </View>
        </View>
      </View>

      {/* ── Text ── */}
      <Text style={styles.title}>Your Order has been{'\n'}accepted</Text>
      <Text style={styles.sub}>
        Your items has been placcd and is on{'\n'}it's way to being processed
      </Text>

      {/* ── Buttons ── */}
      <View style={styles.btnArea}>
        <TouchableOpacity
          style={styles.trackBtn}
          onPress={() => navigation.navigate('Shop')}
        >
          <Text style={styles.trackBtnText}>Track Order</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
          <Text style={styles.homeBtnText}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    overflow: 'hidden',
  },

  // Background blobs
  blob: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.45,
  },

  // Illustration area
  illustrationArea: {
    width: '100%',
    height: 380,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  // Dots
  dot: {
    position: 'absolute',
    borderRadius: 99,
  },

  // Blue swirl line (trái)
  curveLine1: {
    position: 'absolute',
    left: '14%',
    top: '52%',
    width: 55,
    height: 55,
    borderRadius: 99,
    borderWidth: 3,
    borderColor: '#2196F3',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '-30deg' }],
  },

  // Red squiggle (phải trên)
  curveLine2: {
    position: 'absolute',
    right: '13%',
    top: '20%',
    width: 40,
    height: 40,
    borderRadius: 99,
    borderWidth: 3,
    borderColor: '#F44336',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '20deg' }],
  },

  // Yellow arc (phải dưới)
  yellowArc: {
    position: 'absolute',
    right: '10%',
    bottom: '15%',
    width: 36,
    height: 36,
    borderRadius: 99,
    borderWidth: 3,
    borderColor: '#FFC107',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '10deg' }],
  },

  // Check circle
  checkCircleOuter: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(83,177,117,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#53B175',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#53B175',
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },

  checkMark: {
    fontSize: 64,
    color: '#fff',
    fontWeight: '700',
    lineHeight: 72,
  },

  // Text
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#181725',
    textAlign: 'center',
    lineHeight: 36,
    marginTop: 20,
    marginBottom: 14,
    paddingHorizontal: 32,
  },

  sub: {
    fontSize: 15,
    color: '#7C7C7C',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 40,
  },

  // Buttons
  btnArea: {
    position: 'absolute',
    bottom: 48,
    left: 24,
    right: 24,
    alignItems: 'center',
    gap: 16,
  },

  trackBtn: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  trackBtnText: { color: '#fff', fontSize: 18, fontWeight: '600' },

  homeBtnText: { fontSize: 16, color: '#181725', fontWeight: '600' },
});
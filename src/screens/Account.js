import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Image, ScrollView, StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MENU_ITEMS = [
  { icon: 'receipt-outline',      label: 'Orders' },
  { icon: 'person-outline',       label: 'My Details' },
  { icon: 'location-outline',     label: 'Delivery Address' },
  { icon: 'card-outline',         label: 'Payment Methods' },
  { icon: 'pricetag-outline',     label: 'Promo Code' },
  { icon: 'notifications-outline',label: 'Notifications' },
  { icon: 'help-circle-outline',  label: 'Help' },
  { icon: 'information-circle-outline', label: 'About' },
];

export default function Account({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Profile */}
        <View style={styles.profile}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>Afsar Hossen</Text>
              <TouchableOpacity style={styles.editBtn}>
                <Ionicons name="pencil" size={14} color="#53B175" />
              </TouchableOpacity>
            </View>
            <Text style={styles.email}>lmshuvo97@gmail.com</Text>
          </View>
        </View>

        {/* Menu */}
        <View style={styles.menu}>
          {MENU_ITEMS.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuRow} activeOpacity={0.7}>
              <View style={styles.menuLeft}>
                <Ionicons name={item.icon} size={22} color="#181725" style={styles.menuIcon} />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#181725" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Log Out */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Ionicons name="log-out-outline" size={20} color="#53B175" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  // Profile
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
    backgroundColor: '#eee',
  },

  profileInfo: { flex: 1 },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#181725',
  },

  editBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F2F3F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  email: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 4,
  },

  // Menu
  menu: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
  },

  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuIcon: {
    marginRight: 16,
    width: 24,
  },

  menuLabel: {
    fontSize: 16,
    color: '#181725',
    fontWeight: '500',
  },

  // Logout
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 24,
    paddingVertical: 18,
    borderRadius: 19,
    backgroundColor: '#F2F3F2',
    gap: 10,
  },

  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#53B175',
  },
});
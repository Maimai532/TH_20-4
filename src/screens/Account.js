import React, { useContext } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, StatusBar,Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';

const MENU_ITEMS = [
  { icon: 'receipt-outline',            label: 'Orders',           screen: 'Orders' },
  { icon: 'person-outline',             label: 'My Details',       screen: null },
  { icon: 'location-outline',           label: 'Delivery Address', screen: 'Location' },
  { icon: 'card-outline',               label: 'Payment Methods',  screen: null },
  { icon: 'pricetag-outline',           label: 'Promo Code',       screen: null },
  { icon: 'notifications-outline',      label: 'Notifications',    screen: null },
  { icon: 'help-circle-outline',        label: 'Help',             screen: null },
  { icon: 'information-circle-outline', label: 'About',            screen: null },
];

export default function Account({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  const initial = user?.name?.charAt(0)?.toUpperCase() || 'U';

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
              <Text style={styles.name}>{user?.name || 'User'}</Text>
              <TouchableOpacity style={styles.editBtn}>
                <Ionicons name="pencil" size={14} color="#c96b13" />
              </TouchableOpacity>
            </View>
            <Text style={styles.email}>{user?.email || ''}</Text>
          </View>
        </View>

        {/* Menu */}
        <View style={styles.menu}>
          {MENU_ITEMS.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuRow}
              activeOpacity={0.7}
              onPress={() => item.screen && navigation.navigate(item.screen)}
            >
              <View style={styles.menuLeft}>
                <Ionicons name={item.icon} size={22} color="#252417" style={styles.menuIcon} />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#181725" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Log Out */}
        <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
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
  nameRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  name: { fontSize: 20, fontWeight: '700', color: '#181725' },
  editBtn: {
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: '#F2F3F2',
    alignItems: 'center', justifyContent: 'center',
  },
  email: { fontSize: 14, color: '#7C7C7C', marginTop: 4 },

  menu: { marginHorizontal: 20, backgroundColor: '#fff' },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  menuIcon: { marginRight: 16, width: 24 },
  menuLabel: { fontSize: 16, color: '#181725', fontWeight: '500' },

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
  logoutText: { fontSize: 16, fontWeight: '600', color: '354d6a' },
});
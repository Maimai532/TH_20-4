import AsyncStorage from '@react-native-async-storage/async-storage';

// ──────────────────────────────────────────
//  GET
// ──────────────────────────────────────────
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.log(`[storage] GET error (${key}):`, e);
    return null;
  }
};

// ──────────────────────────────────────────
//  SET
// ──────────────────────────────────────────
export const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(`[storage] SET error (${key}):`, e);
  }
};

// ──────────────────────────────────────────
//  REMOVE
// ──────────────────────────────────────────
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(`[storage] REMOVE error (${key}):`, e);
  }
};
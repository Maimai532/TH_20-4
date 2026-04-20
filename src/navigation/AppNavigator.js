import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// ───────── AUTH ─────────
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignInScreen from '../screens/SignInScreen';
import PhoneNumberScreen from '../screens/PhoneNumberScreen';
import VerificationScreen from '../screens/VerificationScreen';
import LocationScreen from '../screens/LocationScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

// ───────── MAIN ─────────
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Beverages from '../screens/Beverages';
import ProductDetail from '../screens/ProductDetail';

import Search from '../screens/Search';
import Filters from '../screens/Filters';
import MyCart from '../screens/MyCart';
import Favorites from '../screens/Favorites';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// ───────── AUTH STACK ─────────
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Phone" component={PhoneNumberScreen} />
      <Stack.Screen name="Verify" component={VerificationScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}


// ───────── SHOP STACK ─────────
function ShopStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}


// ───────── EXPLORE STACK ─────────
function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="SearchScreen" component={Search} />
      <Stack.Screen name="Filters" component={Filters} />
      <Stack.Screen name="Beverages" component={Beverages} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}


// ───────── SEARCH STACK ─────────
function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Filters" component={Filters} />
    </Stack.Navigator>
  );
}


// ───────── CART STACK ─────────
function CartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyCart" component={MyCart} />
    </Stack.Navigator>
  );
}


// ───────── FAVORITE STACK ─────────
function FavoriteStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}


// ───────── MAIN TAB ─────────
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#53B175',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { height: 70, paddingBottom: 10 },

        tabBarIcon: ({ color }) => {
          let icon;

          if (route.name === 'Shop') icon = 'storefront-outline';
          if (route.name === 'Explore') icon = 'search-outline';
          if (route.name === 'Cart') icon = 'cart-outline';
          if (route.name === 'Favourite') icon = 'heart-outline';
          if (route.name === 'Account') icon = 'person-outline';

          return <Ionicons name={icon} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Shop" component={ShopStack} />
      <Tab.Screen name="Explore" component={ExploreStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Favourite" component={FavoriteStack} />
      <Tab.Screen name="Account" component={SearchStack} />
    </Tab.Navigator>
  );
}


// ───────── ROOT ─────────
export default function AppNavigator() {
  const isLoggedIn = false; // đổi true khi đã login

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
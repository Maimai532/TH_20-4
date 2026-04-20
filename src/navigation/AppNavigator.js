import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { AuthContext } from '../context/AuthContext';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignInScreen from '../screens/SignInScreen';
import PhoneNumberScreen from '../screens/PhoneNumberScreen';
import VerificationScreen from '../screens/VerificationScreen';
import LocationScreen from '../screens/LocationScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Beverages from '../screens/Beverages';
import ProductDetail from '../screens/ProductDetail';
import Search from '../screens/Search';
import Filters from '../screens/Filters';
import MyCart from '../screens/MyCart';
import Checkout from '../screens/Checkout';
import OrderAccepted from '../screens/OrderAccepted';
import OrderFailed from '../screens/OrderFailed';
import Favorites from '../screens/Favorites';
import Account from '../screens/Account';
import OrdersScreen from '../screens/OrdersScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

function ShopStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExploreScreen" component={Explore} />
      <Stack.Screen name="SearchScreen" component={Search} />
      <Stack.Screen name="FiltersScreen" component={Filters} />
      <Stack.Screen name="BeveragesScreen" component={Beverages} />
      <Stack.Screen name="ProductDetailFromExplore" component={ProductDetail} />
    </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartScreen" component={MyCart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="OrderAccepted" component={OrderAccepted} />
      <Stack.Screen name="OrderFailed" component={OrderFailed} />
    </Stack.Navigator>
  );
}

function FavoriteStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FavoritesScreen" component={Favorites} />
    </Stack.Navigator>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountScreen" component={Account} />
      <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#53B175',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { height: 70, paddingBottom: 10 },
        tabBarIcon: ({ color }) => {
          const icons = {
            Shop: 'storefront-outline',
            Explore: 'search-outline',
            Cart: 'cart-outline',
            Favourite: 'heart-outline',
            Account: 'person-outline',
          };
          return <Ionicons name={icons[route.name]} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Shop" component={ShopStack} />
      <Tab.Screen name="Explore" component={ExploreStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Favourite" component={FavoriteStack} />
      <Tab.Screen name="Account" component={AccountStack} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color="#53B175" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
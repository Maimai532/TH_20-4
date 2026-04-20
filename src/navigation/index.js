import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import Home from "../screens/Home";
import Login from "../screens/LoginScreen";

export default function RootNavigator() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null; // hoặc splash

  return user ? <Home /> : <Login />;
}
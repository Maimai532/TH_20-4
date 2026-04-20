import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Thông báo", "Vui lòng nhập email và mật khẩu");
      return;
    }

    Alert.alert(
      "Thành công",
      "Đăng nhập thành công ",
      [
        {
          text: "OK",
          onPress: async () => {
            await login({ name: email, email, token: "fake-token" });
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Login</Text>
      <Text style={styles.sub}>Enter your email and password</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.bottom}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: "#fff", justifyContent: "flex-start" },
  logo: { width: 60, height: 60, alignSelf: "center", marginBottom: 60, marginTop: 40 },
  title: { fontSize: 26, fontWeight: "700", marginBottom: 5 },
  sub: { color: "#777", marginBottom: 30 },
  input: { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 10, fontSize: 16, marginBottom: 15 },
  button: { backgroundColor: "#354d6a", padding: 18, borderRadius: 15, alignItems: "center", marginTop: 10 },
  btnText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  bottom: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  link: { color: "#0c92eb", fontWeight: "600" },
});
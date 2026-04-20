import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";


export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Logging</Text>
      <Text style={styles.sub}>Enter your emails and passwords</Text>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={{ marginTop: 20 }}>Go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 25,
  backgroundColor: "#ffffff",
  justifyContent: "flex-start", // 🔥 đổi ở đây
},

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 5,
  },

  sub: {
    color: "#777",
    marginBottom: 30,
  },

  label: {
    marginBottom: 5,
    marginTop: 10,
    color: "#555",
  },

  input: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#53B175",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 30,
  },

  btnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  link: {
    color: "#53B175",
    fontWeight: "600",
  },
  logo: {
  width: 60,
  height: 60,
  alignSelf: "center",
  marginBottom: 100,
},
});
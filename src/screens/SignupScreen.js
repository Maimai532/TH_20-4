import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Signup</Text>
      <Text style={styles.sub}>Create your account</Text>

      {/* USERNAME */}
      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} placeholder="john_doe" />

      {/* EMAIL */}
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="example@gmail.com" />

      {/* PASSWORD */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="********"
        secureTextEntry
      />
<Text style={styles.sub}>By signing up, you agree to our Terms and Privacy Policy.</Text>
      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      {/* BACK LOGIN */}
      <View style={styles.bottom}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },

  logo: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 30, // 🔥 giảm từ 100 xuống cho hợp lý
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
  },

  sub: {
    color: "#777",
    marginBottom: 25,
  },

  label: {
    marginTop: 10,
    marginBottom: 5,
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
  sub: {
    color: "#777",
    marginTop:20,
  },
});
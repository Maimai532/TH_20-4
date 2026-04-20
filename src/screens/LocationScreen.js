import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function LocationScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* BACK */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* IMAGE */}
      <Image
        source={require("../../assets/images/bando.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* TITLE */}
      <Text style={styles.title}>Select Your Location</Text>

      {/* SUB */}
      <Text style={styles.sub}>
        Switch on your location to stay in tune with what’s happening in your area
      </Text>

      {/* ZONE */}
      <Text style={styles.label}>Your Zone</Text>
      <View style={styles.input}>
        <Text style={styles.inputText}>Banasree</Text>
        <Text>⌄</Text>
      </View>

      {/* AREA */}
      <Text style={styles.label}>Your Area</Text>
      <View style={styles.input}>
        <Text style={styles.placeholder}>Types of your area</Text>
        <Text>⌄</Text>
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
  },

  backBtn: {
    marginBottom: 10,
    width: 40,
  },

  backText: {
    fontSize: 22,
  },

  image: {
    width: "100%",
    height: 180,
    alignSelf: "center",
    marginVertical: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },

  sub: {
    textAlign: "center",
    color: "#777",
    marginBottom: 30,
    lineHeight: 20,
  },

  label: {
    color: "#777",
    marginTop: 10,
  },

  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 12,
  },

  inputText: {
    fontSize: 16,
  },

  placeholder: {
    color: "#bbb",
  },

  button: {
    backgroundColor: "#53B175",
    padding: 18,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 40,
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
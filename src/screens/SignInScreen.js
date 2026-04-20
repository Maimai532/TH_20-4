import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function PhoneNumberScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/qua.png")}
          style={styles.image}
        // resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Get your groceries with nectar</Text>

        {/* INPUT */}
        <View style={styles.inputRow}>
          <Text style={styles.code}>🇻🇳 +84</Text>

          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onFocus={() => navigation.navigate("Phone")}
          />
        </View>

        <Text style={styles.or}>Or connect with social media</Text>

        <TouchableOpacity style={styles.google}>
          <Text style={styles.btnText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fb}>
          <Text style={styles.btnText}>Continue with Facebook</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  content: {
    padding: 25,
  },
  imageContainer: {
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    width: "70%",
    fontWeight: "600",
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 2,
  },

  code: {
    fontSize: 16,
    fontWeight: "500",

  },

  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },

  or: {
    textAlign: "center",
    margin: 30,
    color: "#777",
    fontSize: 13,

  },

  google: {
    backgroundColor: "#5383EC",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },

  fb: {
    backgroundColor: "#4A66AC",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "600",
  },

  nextBtn: {
    position: "absolute",
    bottom: 40,
    right: 30,
    backgroundColor: "#53B175",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
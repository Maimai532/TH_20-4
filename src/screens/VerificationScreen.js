import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";

export default function VerificationScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ fontSize: 30 }}>◀︎</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Enter your 4-digit code</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="----"
        />

        <Text style={styles.resend}>Resend Code</Text>

        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => navigation.navigate("Location")}
        >
          <Text style={{ color: "#fff", fontSize: 30 }}>▶︎</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25 },

  title: { fontSize: 22, marginBottom: 30 },

  input: {
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 20,
    letterSpacing: 10,
  },

  resend: {
    color: "#53B175",
    marginTop: 15,
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
  backBtn: {
    marginTop: 10,
    marginBottom: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
  },
});
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";

export default function PhoneNumberScreen({ navigation }) {
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

        <Text style={styles.title}>Enter your mobile number</Text>
        <Text style={styles.sub}>Mobile Number</Text>
    
        <View style={styles.inputRow}>
          <Text>🏳️‍🌈 +880</Text>

          <TextInput
            style={{ marginLeft: 10, flex: 1 }}
            keyboardType="number-pad"
            placeholder="Phone number"
          />
        </View>

        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => navigation.navigate("Verify")}
        >
          <Text style={{ color: "#fff", fontSize: 30 }}>▶︎</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
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

  title: {
    fontSize: 22,
    marginBottom: 30,
    marginTop: 70,
    fontWeight: "600",
  },

  inputRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },

  nextBtn: {
    position: "absolute",
    bottom: 40,
    right: 30,
    backgroundColor: "#5ca677",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    elevation: 5,
  },
});
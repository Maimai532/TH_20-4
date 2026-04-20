import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";

export default function OnboardingScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/images/men.png")}
      style={styles.bg}

      imageStyle={{
        resizeMode: "cover",
        alignSelf: "center",
      }}

    >

      <View style={styles.overlay} pointerEvents="box-none">
        <Image
                  source={require("../../assets/images/logo.png")}
                  style={styles.logo}
                  resizeMode="contain" // full k bị cắt
                />
        <Text style={styles.title}>Welcome {"\n"} to our store</Text>
        <Text style={styles.sub}>
          Get your groceries in as fast as one hour
        </Text>


        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "flex-end",

  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 450,
    padding: 10,
    margin: 10,

  },

  title: {
    color: "#fff",
    fontSize: 45,
    textAlign: "center",
  },

  sub: {
    color: "#fff",
    marginBottom: 30,
    fontSize: 14,

  },

  button: {
    backgroundColor: "#53B175",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    width: "90%",
  },

  btnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    
  },
   logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
});
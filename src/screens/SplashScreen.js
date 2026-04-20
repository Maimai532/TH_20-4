import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect } from "react";

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Image
          source={require("../../assets/images/logo2.png")}
          style={styles.logo}
          resizeMode="contain" // full k bị cắt
        />
        <View>
          <Text style={styles.title}>nectar</Text>
          <Text style={styles.sub}>online groceries</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5ca477",
    justifyContent: "center",
    alignItems: "center",
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
    alignSelf: "center",
  },

  title: {
    fontSize: 70,
    color: "#fff",
    letterSpacing: 5,
    fontFamily: "Baloo Bhaijaan",
  },

  sub: {
    color: "#fff",
    letterSpacing: 7,
    marginTop: -10,
  },
});
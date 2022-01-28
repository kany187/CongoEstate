import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/logo.jpg")}
    >
      <View style={styles.logoContainer}>
        {/* <Image style={styles.logo} source={require("../assets/logo.jpg")} /> */}
        <Text style={styles.tagLine}>
          L'immobilier n'a jamais été plus facile
        </Text>
      </View>
      <View style={styles.button}>
        <AppButton
          title="Portail Agent"
          onPress={() => navigation.navigate("Portal Agent")}
        />
        <AppButton
          title="Login / Register"
          color="secondary"
          onPress={() => navigation.navigate("Login / Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: 300,
  },
  button: {
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 280,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default WelcomeScreen;

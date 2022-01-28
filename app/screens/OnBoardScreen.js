import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

import colors from "../config/colors";

function OnBoardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/trust.jpg")} />
      <AppText style={styles.heading}>
        Votre guide pour l'achat des terrains
      </AppText>
      <AppText style={styles.content}>
        Notre equipe est la pour vous servir
      </AppText>
      <AppButton
        title="Get Started"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 420,
    borderBottomLeftRadius: 100,
  },
  heading: {
    fontSize: 32,
    fontWeight: "600",
    color: colors.black,
    width: "90%",
    paddingTop: 20,
    paddingLeft: 20,
  },
  content: {
    marginTop: 10,
    paddingLeft: 20,
    fontSize: 16,
    color: colors.primary,
  },
});
export default OnBoardScreen;

import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import Search from "../components/Search";

function MapListingScreen(props) {
  return (
    <View style={styles.container}>
      <Search style={styles.position} />
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  position: {
    padding: 20,
    position: "absolute",
    zIndex: 999,
    top: 20,
    width: "100%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default MapListingScreen;

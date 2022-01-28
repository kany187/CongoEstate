import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

import colors from "../config/colors";

function ListingDetailScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageDetail} source={require("../assets/pic.jpg")} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.detail}>
          <AppText style={styles.heading}>Details</AppText>
          <View style={styles.wrapper}>
            <AppText style={styles.priceDetail}>Prix: $2,500</AppText>
            <AppText style={styles.locationDetail}>Location: Nsele</AppText>
            <AppText>Dimension: 20x20 m^2</AppText>
          </View>
        </View>
        <View style={styles.detail}>
          <AppText style={styles.heading}>Description</AppText>
          <AppText>
            Terrain a vendre a Nsele. A 20 min de l'areoport. Contacter nos
            agent pour en savoir plus sur l'achat.
          </AppText>
        </View>
      </ScrollView>
      <AppButton title="En savoir plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    flex: 1,
  },
  imageDetail: {
    width: "100%",
    height: 250,
  },
  priceDetail: {
    // fontWeight: "600",
    // fontSize: 24,
  },
  detail: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    padding: 20,
    height: 150,
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  heading: {
    fontSize: 30,
  },
  locationDetail: {},
  dimension: {
    fontSize: 18,
  },
  wrapper: {
    paddingTop: 10,
  },
});

export default ListingDetailScreen;

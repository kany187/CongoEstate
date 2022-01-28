import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ price, photos, address, dimension, title, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.cover}>
          <Image style={styles.image} source={photos} />
          {title && (
            <View style={styles.poster}>
              <AppText style={styles.nameTop}>{title}</AppText>
            </View>
          )}
        </View>
        <AppText style={styles.priceDetail}>${price}</AppText>
        <View style={styles.detail}>
          <AppText style={styles.address}>{address}</AppText>
          <View style={styles.wrapper}>
            <AppText style={styles.dimension}>{dimension}</AppText>
            <AppText style={styles.dimensionDetail}>m2</AppText>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    // width: 315,
    marginBottom: 20,
    marginTop: 10,
    height: 280,
  },
  cover: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  poster: {
    backgroundColor: colors.primary,
    width: "30%",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    marginLeft: 20,
    marginTop: 10,
  },
  nameTop: {
    color: colors.black,
    fontWeight: "600",
    fontSize: 20,
    marginTop: 0,
    marginLeft: 10,
  },
  priceDetail: {
    paddingLeft: 20,
    paddingTop: 5,
    fontWeight: "600",
    fontSize: 24,
  },
  detail: {
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // alignItems: "center",
  },
  address: {
    fontSize: 18,
    fontWeight: "600",
    color: "#b8bece",
  },
  dimension: {
    fontSize: 18,
    fontWeight: "600",
    color: "#b8bece",
  },
  dimensionDetail: {
    color: "#b8bece",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 1,
  },
});

export default Card;

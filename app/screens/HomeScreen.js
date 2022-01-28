import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import AppButton from "../components/AppButton";

import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";

function HomeScreen({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.heading}>
            <AppText style={styles.location}>Location</AppText>
            <AppText style={styles.city}>Kinshasa</AppText>
          </View>
          <AppText style={styles.subTitle}>
            Approfonsissez vos recherces
          </AppText>
          <View style={styles.search}>
            <Searchbar placeholder="Ville, Region" value={""} />
          </View>
          <AppText style={styles.subTitle}>Pres de chez vous</AppText>
          <View style={styles.list}>
            <FlatList
              data={listings}
              keyExtractor={(listings) => listings.id.toString()}
              renderItem={({ item }) => (
                <Card
                  price={item.price}
                  photos={item.photos}
                  address={item.address}
                  dimension={item.dimension}
                />
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f3f5",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  heading: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  post: {
    backgroundColor: colors.primary,
  },
  location: {
    fontSize: 16,
    color: "#b8bece",
    fontWeight: "500",
  },
  city: {
    fontSize: 20,
    color: "#3c4560",
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 15,
    color: "#b8bece",
    fontWeight: "600",
    marginLeft: 20,
    marginTop: 30,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
  post: {},
});

const listings = [
  {
    id: 1,
    price: "2,500",
    photos: require("../assets/pic.jpg"),
    address: "Nsele",
    dimension: "20x20",
  },
  {
    id: 2,
    price: "10,500",
    photos: require("../assets/pic.jpg"),
    address: "Maloukou",
    dimension: "15x10",
    title: "Nouveau",
  },
  {
    id: 3,
    price: "2,500",
    photos: require("../assets/pic.jpg"),
    address: "Nsele",
    dimension: "20x20",
    title: "Nouveau",
  },
  {
    id: 4,
    price: "2,500",
    photos: require("../assets/picFour.jpg"),
    address: "Nsele",
    dimension: "20x20",
    title: "Nouveau",
  },
  {
    id: 5,
    price: "2,500",
    photos: require("../assets/picFive.jpg"),
    address: "Nsele",
    dimension: "20x20",
  },
  {
    id: 6,
    price: "2,500",
    photos: require("../assets/picSix.jpg"),
    address: "Nsele",
    dimension: "20x20",
    title: "Nouveau",
  },
  {
    id: 7,
    price: "2,500",
    photos: require("../assets/picSix.jpg"),
    address: "Nsele",
    dimension: "20x20",
  },
  {
    id: 8,
    price: "2,500",
    photos: require("../assets/pic.jpg"),
    address: "Nsele",
    dimension: "20x20",
    title: "Nouveau",
  },
  {
    id: 9,
    price: "2,500",
    photos: require("../assets/pic.jpg"),
    address: "Nsele",
    dimension: "20x20",
    title: "Nouveau",
  },
  {
    id: 10,
    price: "2,500",
    photos: require("../assets/picTen.jpg"),
    address: "Nsele",
    dimension: "20x20",
    title: "Nouveau",
  },
];

export default HomeScreen;

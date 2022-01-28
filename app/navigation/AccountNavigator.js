import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MessageScreen from "../screens/MessageScreen";
import AccountScreen from "../screens/AccountScreen";
import Listings from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Account"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Messages"
      component={MessageScreen}
      options={{ title: "Messages" }}
    />
    <Stack.Screen
      name="Listings"
      component={Listings}
      options={{ title: "Your Listings" }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;

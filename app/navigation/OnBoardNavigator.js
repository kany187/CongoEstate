import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import OnBoardScreen from "../screens/OnBoardScreen";
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

const OnBoardNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="OnBoard"
      component={OnBoardScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="HomeScreen"
      component={AppNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default OnBoardNavigator;

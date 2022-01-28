import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcom"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Portal Agent"
      component={LoginScreen}
      //   options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login / Register"
      component={LoginScreen}
      //   options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;

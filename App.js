import { View } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import OnBoardScreen from "./app/screens/OnBoardScreen";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardNavigator from "./app/navigation/OnBoardNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

import { View } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import OnBoardScreen from "./app/screens/OnBoardScreen";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardNavigator from "./app/navigation/OnBoardNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import MessageScreen from "./app/screens/MessageScreen";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
    <ListingEditScreen />
  );
}

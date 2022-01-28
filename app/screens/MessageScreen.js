import React from "react";
import { FlatList } from "react-native";

const message = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/background.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/background.jpg"),
  },
  {
    id: 2,
    title: "T3",
    description: "D3",
    image: require("../assets/background.jpg"),
  },
];

function MessageScreen(props) {
  return <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => }
        />;
}

const styles = StyleSheet.create({});
export default MessageScreen;

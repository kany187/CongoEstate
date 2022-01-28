import React from "react";
import { View, StyleSheet } from "react-native";

import { Searchbar } from "react-native-paper";

function Search({ title, input, style }) {
  return (
    <View style={[styles.search, style]}>
      <Searchbar placeholder={title} value={input} />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    padding: 16,
  },
});
export default Search;

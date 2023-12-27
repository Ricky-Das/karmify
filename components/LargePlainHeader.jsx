import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const LargePlainHeader = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_WIDTH,
    justifyContent: "flex-end",
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default LargePlainHeader;

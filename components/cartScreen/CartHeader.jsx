import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import AccentHeader from "../AccentHeader";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const CartHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>My Cart</Text>
      <AccentHeader>Items</AccentHeader>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.15,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
    paddingBottom: 20,
  },
});

export default CartHeader;

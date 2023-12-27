import React from "react";
import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import NavBar from "../components/NavBar";
import AppColors from "../components/AppColors";
import { CartProvider } from "../components/CartContext";

const _layout = () => {
  return (
    <CartProvider>
      <View style={styles.container}>
        <Slot />
        <NavBar />
      </View>
    </CartProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.secondaryBackground,
  },
});

export default _layout;

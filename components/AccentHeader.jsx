import React from "react";
import { Text, StyleSheet } from "react-native";
import AppColors from "./AppColors";

function AccentHeader({ children, style }) {
  return <Text style={[styles.headerText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: AppColors.accent,
  },
});

export default AccentHeader;

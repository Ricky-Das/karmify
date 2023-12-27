import React from "react";
import { TouchableOpacity, Text, Dimensions } from "react-native";
import AppColors from "./AppColors";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

function AccentButton({ onPress, children, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  button: {
    backgroundColor: AppColors.accent,
    borderRadius: 17,
    padding: 10,
    width: SCREEN_WIDTH * 0.45,
    height: SCREEN_HEIGHT * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
};

export default AccentButton;

import React from "react";
import { TouchableOpacity, Text, Dimensions } from "react-native";
import AppColors from "./AppColors";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

function SmallAccentButton({ onPress, children }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  button: {
    backgroundColor: AppColors.accent,
    borderRadius: 17,
    padding: 6,
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_HEIGHT * 0.04,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
};

export default SmallAccentButton;

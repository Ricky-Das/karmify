import React from "react";
import { TouchableOpacity, Text, Dimensions } from "react-native";
import { router } from "expo-router";
import AppColors from "./AppColors";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

function Button(props) {
  const { onPress, children, isBackButton } = props;

  // Determine the onPress handler
  const handlePress = isBackButton ? () => router.back() : onPress;

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  button: {
    backgroundColor: AppColors.shadedBackground,
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

export default Button;

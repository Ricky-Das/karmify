import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import AppColors from "../AppColors";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function ImageSection({ imageURI }) {
  return (
    <View style={styles.container}>
      <View style={styles.donationImageContainer}>
        <Image style={styles.donationImage} source={{ uri: imageURI }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.3,
    width: SCREEN_WIDTH,
    backgroundColor: AppColors.secondaryBackground,
    padding: 20,
  },
  donationImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  donationImageContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 17,
  },
});

export default ImageSection;

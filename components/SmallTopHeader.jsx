import React from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import AppColors from "./AppColors";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function SmallTopHeader({ children }) {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>{children}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: AppColors.primaryBackground,
    height: SCREEN_HEIGHT * 0.06,
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: AppColors.accent,
  },
});

export default SmallTopHeader;

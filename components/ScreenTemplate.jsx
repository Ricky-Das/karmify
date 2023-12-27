import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import SmallTopHeader from "./SmallTopHeader";
import AppColors from "./AppColors";

function ScreenTemplate(props) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <SmallTopHeader>{props.headerText}</SmallTopHeader>
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: AppColors.primaryBackground,
  },
});

export default ScreenTemplate;

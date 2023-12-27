import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppColors from "../../../components/AppColors";
import { router } from "expo-router";

function Complete(props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/donations");
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Success! Once a delivery driver has been confirmed, you will see your
        delivery information in the “Deliveries” tab.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.secondaryBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: AppColors.primaryText,
    padding: 20, // Added some padding for the text
    textAlign: "center", // Center the text if it spans multiple lines
  },
});

export default Complete;

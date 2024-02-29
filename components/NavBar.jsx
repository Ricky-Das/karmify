import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import AppColors from "./AppColors";

const NavBar = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  //TODO: Add Logic to check if user is a donor
  const isDonor = true;

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/donations")}
      >
        <Ionicons name="md-list" size={24} color="black" />
        <Text style={styles.text}>Donations</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/requests")}
      >
        <FontAwesome5 name="clipboard-list" size={24} color="black" />
        <Text style={styles.text}>Requests</Text>
      </TouchableOpacity>

      {isDonor && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/submissions")}
        >
          <AntDesign name="plus" size={24} color="black" />
          <Text style={styles.text}>Submissions</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/deliveries")}
      >
        <MaterialCommunityIcons
          name="truck-delivery-outline"
          size={24}
          color="black"
        />
        <Text style={styles.text}>Deliveries</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/profile")}
      >
        <AntDesign name="user" size={24} color="black" />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: AppColors.primaryBackground,
    borderTopWidth: 1,
    borderTopColor: AppColors.border,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 5,
  },
  text: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default NavBar;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import AppColors from "../AppColors";

const SCREEN_WIDTH = Dimensions.get("window").width;

const DeliveryCard = ({ deliveryInfo }) => {
  return (
    <Link
      href={{
        pathname: "deliveries/delivery/[id]",
        params: { id: deliveryInfo.id },
      }}
      asChild
    >
      <TouchableOpacity style={styles.DeliveryCard}>
        <View style={styles.DeliveryCardContent}>
          <Text style={styles.titleText}>{deliveryInfo.donationTitle}</Text>
          <View style={{ height: 10 }}></View>
          <Text style={styles.dateText}>Arriving {deliveryInfo.dateAdded}</Text>
          <Text style={styles.dateText}>Status: {deliveryInfo.status}</Text>
        </View>
        <Text style={styles.viewButtonText}>View Delivery Info</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  DeliveryCard: {
    width: "90%", // Taking full width of the container
    minHeight: 90, // Minimum height for the card
    backgroundColor: AppColors.primaryBackground,
    borderRadius: 17, // Adjusted to match the image
    marginVertical: 8, // Space between cards
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // To separate content and button
    paddingHorizontal: 20, // Horizontal padding
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: SCREEN_WIDTH * 0.05,
  },
  DeliveryCardContent: {
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 18, // Adjust font size as per design
    fontWeight: "bold", // Bold font weight
    color: "#000", // Assuming the text color is black
  },
  dateText: {
    fontSize: 14, // Smaller font size for the date
    color: "#6e6e6e", // A grey color for the date
  },
  viewButtonText: {
    fontSize: 14, // Font size for the button text
    color: AppColors.shadedBackground, // Button text color
  },
});

export default DeliveryCard;

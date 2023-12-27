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

const RequestCard = ({ requestInfo }) => {
  return (
    <Link
      href={{
        pathname: "requests/request/[id]",
        params: { id: requestInfo.id },
      }}
      asChild
    >
      <TouchableOpacity style={styles.donationCard}>
        <View style={styles.donationCardContent}>
          <Text style={styles.titleText}>{requestInfo.title}</Text>
          <Text style={styles.dateText}>{requestInfo.dateAdded}</Text>
        </View>
        <Text style={styles.viewButtonText}>View Request</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  donationCard: {
    width: "90%", // Taking full width of the container
    minHeight: 60, // Minimum height for the card
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
  donationCardContent: {
    justifyContent: "center",
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
    fontSize: 16, // Font size for the button text
    color: AppColors.shadedBackground, // Button text color
  },
});

export default RequestCard;

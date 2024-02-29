import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import AppColors from "./AppColors";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const DonationCard = ({ donationInfo, addToCartButton }) => {
  return (
    <Link
      href={{
        pathname: "/donations/donation/[id]",
        params: { id: donationInfo.id, addCartButton: addToCartButton },
      }}
      asChild
    >
      <TouchableOpacity style={styles.donationCard}>
        <View style={styles.donationCardLeft}>
          <View style={styles.donationImageContainer}>
            <Image
              style={styles.donationImage}
              source={{ uri: donationInfo.imageURI }}
            />
          </View>
        </View>
        <View style={styles.donationCardRight}>
          <View style={styles.donationCardRightTop}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {donationInfo.title}
            </Text>
          </View>
          <View style={styles.donationCardRightBottom}>
            <Text style={{ fontSize: 15 }}>
              Quantity: {donationInfo.quantity}
            </Text>
            <Text style={{ fontSize: 15 }}>
              Condition: {donationInfo.condition}
            </Text>
            <Text style={{ fontSize: 15 }}>{donationInfo.location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  donationCard: {
    width: "90%",
    height: SCREEN_HEIGHT * 0.165,
    backgroundColor: AppColors.primaryBackground,
    borderRadius: 17,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000", // Color of the shadow
    shadowOffset: { width: 0, height: 2 }, // Shape of the shadow
    shadowOpacity: 0.25, // Opacity of the shadow
    shadowRadius: 3.84, // Blur radius of the shadow
    elevation: 5, // for Android
  },
  donationCardLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  donationCardRight: {
    flex: 1,
    padding: 10,
  },
  donationCardRightTop: {
    flex: 1,
    justifyContent: "center",
  },
  donationCardRightBottom: {
    flex: 1,
    justifyContent: "center",
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

export default DonationCard;

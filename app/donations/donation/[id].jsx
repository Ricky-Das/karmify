import React, { useEffect, useState, useRef } from "react";
import { Animated, Easing } from "react-native";

import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useCart } from "../../../components/CartContext";
import SmallTopHeader from "../../../components/SmallTopHeader";
import AppColors from "../../../components/AppColors";
import ImageSection from "../../../components/specificDonationScreen/ImageSection";
import getDonationById from "../../../backend/backendFunctions/getDonationById";
import AccentHeader from "../../../components/AccentHeader";
import AccentButton from "../../../components/AccentButton";
import Button from "../../../components/Button";
import Notification from "../../../components/Notification";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function Page() {
  const params = useLocalSearchParams();
  const { id, addCartButton } = params;
  const [donation, setDonation] = useState(null);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    const fetchDonation = () => {
      const donationData = getDonationById(id);
      setDonation(donationData);
    };

    fetchDonation();
  }, [id]);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("Success");

  const [notificationKey, setNotificationKey] = useState(0);

  const handleAddItem = (item) => {
    const isAdded = addToCart(item);
    if (isAdded) {
      setNotificationText("Added to Cart!");
    } else {
      setNotificationText("Already in Cart");
      setNotificationType("Warning");
    }
    setShowNotification(true);

    // Increment key to re-trigger the notification
    setNotificationKey((prevKey) => prevKey + 1);

    // Optionally, hide the notification after some time
    setTimeout(() => setShowNotification(false), 3500);
  };

  return (
    <View style={styles.container}>
      <SmallTopHeader>Donation Information</SmallTopHeader>
      <Notification
        key={notificationKey}
        text={notificationText}
        isVisible={showNotification}
        type={notificationType} // Can be "Success", "Warning", or "Danger"
      />

      {donation ? (
        <>
          <ImageSection imageURI={donation.imageURI} />

          <View style={{ height: SCREEN_HEIGHT * 0.32 }}>
            <ScrollView style={styles.donationInfoContainer}>
              <Text style={styles.donationTitle}>{donation.title}</Text>
              <AccentHeader style={{ paddingTop: 13 }}>Details</AccentHeader>
              <Text style={styles.donationInfoText}>
                Quantity: {donation.quantity}
              </Text>
              <Text style={styles.donationInfoText}>
                Quality: {donation.condition}
              </Text>
              <Text style={styles.donationInfoText}>
                Location: {donation.location}
              </Text>
              <AccentHeader style={{ paddingTop: 13 }}>
                Description
              </AccentHeader>
              <Text style={styles.donationInfoText}>
                {donation.description}
              </Text>
            </ScrollView>
          </View>
          <View style={styles.buttonContainer}>
            {!addCartButton ? (
              <AccentButton onPress={() => handleAddItem(donation)}>
                Add To Cart
              </AccentButton>
            ) : null}

            <View style={{ height: 18 }}></View>
            <Button isBackButton>Go Back</Button>
          </View>
        </>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Loading...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.17,
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryBackground,
  },
  donationInfoContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  donationInfoText: {
    fontSize: 20,
  },
  donationTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  notification: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "green",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100, // Ensure it's above other elements
  },
  notificationText: {
    color: "white",
    fontSize: 16,
  },
});

export default Page;

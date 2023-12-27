import React, { useEffect, useState, useRef } from "react";
import { Animated, Easing } from "react-native";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import SmallTopHeader from "../../../components/SmallTopHeader";
import AppColors from "../../../components/AppColors";
import AccentHeader from "../../../components/AccentHeader";
import DeleteButton from "../../../components/DeleteButton";
import Button from "../../../components/Button";
import getDeliveryById from "../../../backend/backendFunctions/getDeliveryById";
import SmallAccentButton from "../../../components/SmallAccentButton";
import ProfileInfo from "../../../components/ProfileInfo";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function Page() {
  const params = useLocalSearchParams();
  const { id } = params;
  const [delivery, setDelivery] = useState(null);

  useEffect(() => {
    async function fetchDelivery() {
      const delivery = await getDeliveryById(id);
      setDelivery(delivery);
    }

    fetchDelivery();
  }, [id]);

  if (delivery) {
    console.log(delivery.driverName);
    console.log(delivery.driverImageUri);
  }

  return (
    <View style={styles.container}>
      <SmallTopHeader>Delivery Information</SmallTopHeader>

      {delivery ? (
        <>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: AppColors.secondaryBackground,
            }}
          >
            <View style={styles.contentContainer}>
              <AccentHeader>Delivery Status</AccentHeader>
              <Text style={{ fontSize: 20 }}>{delivery.status}</Text>
              <AccentHeader style={{ paddingTop: SCREEN_WIDTH * 0.05 }}>
                Delivery Item
              </AccentHeader>
              <Text style={{ fontSize: 20 }}>{delivery.donationTitle}</Text>
              <View
                style={{
                  height: SCREEN_HEIGHT * 0.1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SmallAccentButton
                  onPress={() =>
                    router.push("/donations/donation/" + delivery.donationId)
                  }
                >
                  View Item Info
                </SmallAccentButton>
              </View>

              <View
                style={{
                  paddingLeft: SCREEN_WIDTH * 0.05,
                  height: 1.5,
                  backgroundColor: "#CFCFCF",
                }}
              ></View>
              <AccentHeader style={{ paddingTop: SCREEN_HEIGHT * 0.02 }}>
                Delivery Driver Information
              </AccentHeader>
              {/* Driver Information Section */}
              <ProfileInfo
                imageUri={delivery.driverImageUri}
                profileName={delivery.driverName}
                profileEmail={delivery.driverEmail}
                profilePhone={delivery.driverPhone}
              />
            </View>
            <View style={styles.buttonContainer}>
              <View style={{ height: SCREEN_HEIGHT * 0.05 }}></View>

              <View style={{ height: 18 }}></View>
              <Button isBackButton>Go Back</Button>
            </View>
          </SafeAreaView>
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
  contentContainer: {
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    paddingTop: SCREEN_WIDTH * 0.05,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.63,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.17,
    backgroundColor: AppColors.secondaryBackground,
  },
  driverInfoContainer: {
    paddingVertical: SCREEN_HEIGHT * 0.02,
  },
  driverDetailRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  driverDetailLabel: {
    fontSize: 20,
    color: AppColors.textPrimary,
  },
  driverDetail: {
    fontSize: 20,
    color: AppColors.textSecondary,
  },
  driverImage: {
    width: SCREEN_WIDTH * 0.18, // Adjust size as needed
    height: SCREEN_WIDTH * 0.18, // Adjust size as needed
    borderRadius: SCREEN_WIDTH * 0.18 * 0.5, // Half the width and height to create a circle
    marginRight: 10, // Add some spacing between the image and the name
  },
  driverName: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});

export default Page;

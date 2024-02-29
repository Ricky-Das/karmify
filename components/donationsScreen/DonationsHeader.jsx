import React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import DonationsBg from "../../assets/DonationsBg.png";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

function DonationsHeader(props) {
  const handleCartPress = () => {
    router.push("donations/cart");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={DonationsBg} style={styles.image}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Donations</Text>
          <View style={styles.blurbContainer}>
            <Text style={styles.blurb}>
              Use this page to add donations to your cart and check out. You are
              able to obtain 5 items per month.
            </Text>
          </View>

          <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
            <Ionicons name="cart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  blurb: {
    fontSize: 17.5,
    color: "white",
  },
  blurbContainer: {
    width: SCREEN_WIDTH * 0.98,
    height: Dimensions.get("window").height * 0.07,
  },
  container: {
    alignItems: "center",
  },
  image: {
    height: Dimensions.get("window").height * 0.2,
    width: Dimensions.get("window").width * 1.08,
    justifyContent: "center",
    paddingLeft: 16,
    position: "relative", // Added to position the cart button
  },
  innerContainer: {
    height: Dimensions.get("window").height * 0.2,
    width: Dimensions.get("window").width * 1.08,
    backgroundColor: "rgba(0,0,0, 0.30)",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
    paddingTop: SCREEN_HEIGHT * 0.05,
  },
  cartButton: {
    position: "absolute",
    top: 22,
    right: 45,
    backgroundColor: "white",
    borderRadius: 200,
    padding: 10,
  },
});

export default DonationsHeader;

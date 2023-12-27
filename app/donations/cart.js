import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import { useCart } from "../../components/CartContext";
import DonationCard from "../../components/DonationCard";
import CartHeader from "../../components/cartScreen/CartHeader";
import AccentButton from "../../components/AccentButton";
import Button from "../../components/Button";
import Notification from "../../components/Notification";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function cart() {
  const { cart } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationKey, setNotificationKey] = useState(0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      setShowNotification(true);
      setNotificationKey((prevKey) => prevKey + 1);
      return;
    }
    router.push("donations/checkout/select-address");
  };

  const renderItem = ({ item }) => {
    return <DonationCard donationInfo={item} />;
  };
  return (
    <SafeAreaView>
      <Notification
        key={notificationKey}
        text={"Add items to your cart before checking out."}
        isVisible={showNotification}
        type={"Danger"} // Can be "Success", "Warning", or "Danger"
      />
      <CartHeader />
      <View style={{ height: SCREEN_HEIGHT * 0.53 }}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => `donation-${item.id}`}
          contentContainerStyle={styles.donationCardsContainer}
        />
      </View>

      <View style={styles.buttonContainer}>
        <AccentButton onPress={() => handleCheckout()}>Checkout</AccentButton>

        <View style={{ height: 18 }}></View>
        <Button isBackButton>Go Back</Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.17,
  },
  donationCardsContainer: {
    alignItems: "center",
    paddingBottom: SCREEN_HEIGHT * 0.1,
  },
});

export default cart;

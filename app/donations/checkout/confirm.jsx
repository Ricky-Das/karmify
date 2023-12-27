import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, TextInput } from "react-native";
import SmallTopHeader from "../../../components/SmallTopHeader";
import AppColors from "../../../components/AppColors";
import AccentHeader from "../../../components/AccentHeader";
import { useLocalSearchParams } from "expo-router";
import AddressSection from "../../../components/confirmCheckoutScreen/AddressSection";
import { useCart } from "../../../components/CartContext";
import { ScrollView } from "react-native-gesture-handler";
import { router } from "expo-router";
import AccentButton from "../../../components/AccentButton";
import Button from "../../../components/Button";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function confirm(props) {
  const [deliveryInstructions, setDeliveryInstructions] = useState("");
  const params = useLocalSearchParams();
  const { cart } = useCart();
  const address = params.address ? JSON.parse(params.address) : null;

  while (!address) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Loading...</Text>
      </View>
    );
  }

  const renderCartItems = () => {
    return cart.map(
      (
        item,
        index // make sure cart.items is the correct path to your items array
      ) => (
        <Text key={index} style={styles.text}>
          {item.title}
        </Text>
      )
    );
  };

  const handleCheckout = () => {
    // TODO: Add checkout logic here
    router.push("/donations/checkout/complete");
  };

  const handleCancel = () => {
    router.back();
    router.back();
  };

  return (
    <View style={{ flex: 1, backgroundColor: AppColors.primaryBackground }}>
      <SmallTopHeader>Checkout</SmallTopHeader>
      <View style={{ height: SCREEN_HEIGHT * 0.63 }}>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: AppColors.secondaryBackground,
          }}
        >
          <View style={{ paddingLeft: SCREEN_WIDTH * 0.05 }}>
            <AddressSection address={address} />
            <AccentHeader style={{ paddingTop: 20 }}>Items</AccentHeader>
            {renderCartItems()}
            <AccentHeader style={{ paddingTop: 20 }}>Delivery</AccentHeader>
            <Text style={styles.deliveryInstructionText}>
              Delivery Instructions (Optional)
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={setDeliveryInstructions}
              value={deliveryInstructions}
              placeholder="Enter delivery instructions"
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
        <AccentButton onPress={() => handleCheckout()}>
          Finish Checkout
        </AccentButton>

        <View style={{ height: 18 }}></View>
        <Button onPress={() => handleCancel()}>Go Back</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.17,
    backgroundColor: AppColors.secondaryBackground,
  },
  text: {
    fontSize: 18,
    color: AppColors.secondaryText,
    paddingVertical: 5,
  },
  deliveryInstructionText: {
    fontSize: 16,
    color: AppColors.primaryText,
    paddingTop: 10,
    paddingBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: AppColors.shadedBackground,
    backgroundColor: AppColors.primaryBackground,
    borderRadius: 17,
    padding: 10,
    fontSize: 16,
    color: AppColors.primaryText,
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.1,
  },
});

export default confirm;

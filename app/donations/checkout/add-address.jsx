import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import ScreenTemplate from "../../../components/ScreenTemplate";
import AppColors from "../../../components/AppColors";
import AccentButton from "../../../components/AccentButton";
import AccentHeader from "../../../components/AccentHeader";
import Button from "../../../components/Button";
import { router } from "expo-router";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function add_address(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");

  const handleConfirmAddAddress = () => {
    //TODO: Add address logic here
    // You would typically have some validation and then an API call
    console.log(
      firstName,
      lastName,
      streetAddress,
      city,
      state,
      zipCode,
      country
    );
    router.back();
  };

  return (
    <ScreenTemplate headerText="Add Delivery Address">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView>
          <AccentHeader>Enter New Delivery Address</AccentHeader>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={setLastName}
            value={lastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Street Address"
            onChangeText={setStreetAddress}
            value={streetAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            onChangeText={setCity}
            value={city}
          />
          <TextInput
            style={styles.input}
            placeholder="State"
            onChangeText={setState}
            value={state}
          />
          <TextInput
            style={styles.input}
            placeholder="Zip Code"
            onChangeText={setZipCode}
            value={zipCode}
          />
          <TextInput
            style={styles.input}
            placeholder="Country"
            onChangeText={setCountry}
            value={country}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.bottomButtonsContainer}>
        <View style={styles.buttonsContainer}>
          <AccentButton onPress={() => handleConfirmAddAddress()}>
            Confirm Address
          </AccentButton>

          <View style={{ height: 18 }}></View>
          <Button isBackButton>Go Back</Button>
        </View>
      </View>
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  bottomButtonsContainer: {
    flex: 1,
  },
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.17,
    backgroundColor: AppColors.secondaryBackground,
  },
  container: {
    flex: 2.65,
    backgroundColor: AppColors.secondaryBackground,
    paddingLeft: SCREEN_WIDTH * 0.05,
    paddingTop: SCREEN_WIDTH * 0.05,
  },
  input: {
    height: 40,
    width: "90%",
    marginVertical: 10,
    borderWidth: 1.5,
    padding: 10,
    backgroundColor: "white", // Set background color to white for input fields
    borderRadius: 17, // Rounded corners for input fields
    borderColor: AppColors.shadedBackground,
  },
});

export default add_address;

import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import SmallTopHeader from "../../components/SmallTopHeader";
import AppColors from "../../components/AppColors";
import AccentButton from "../../components/AccentButton";
import Button from "../../components/Button";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { Image } from "react-native";
import { createDonationItem, getDonationItems } from "../../backend/firebase-functions";
import { setDonationList } from "../../backend/backendLists/donationsTable";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function Page() {
  const [donationTitle, setdonationTitle] = useState("");
  const [donationDescription, setdonationDescription] = useState("");
  const [donationQuantity, setDonationQuantity] = useState("");
  const [donationCondition, setDonationCondition] = useState("");
  const [donationLocation, setDonationLocation] = useState("");
  const [donationImage, setDonationImage] = useState(null);

  const handleComplete = async () => {
    if (
      !donationTitle ||
      !donationDescription ||
      !donationQuantity ||
      !donationCondition ||
      !donationLocation ||
      !donationImage
    ) {
      Alert.alert("Please fill out all fields and add an image");
      return;
    }
    await createDonationItem(donationTitle, donationDescription, donationQuantity, donationCondition, donationLocation, donationImage)
    const donationItems = await getDonationItems()
    setDonationList(donationItems)
    router.replace("/submissions");
  };

  const pickImage = async () => {
    // Request media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setDonationImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <SmallTopHeader>Submit a Donation</SmallTopHeader>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: AppColors.secondaryBackground,
        }}
      >
        <View style={styles.contentContainer}>
          <ScrollView>
            <Text style={styles.label}>Donation Title</Text>
            <TextInput
              style={styles.input}
              value={donationTitle}
              onChangeText={setdonationTitle}
              placeholder="Enter the title of your donation"
            />

            <Text style={styles.label}>Donation Description</Text>
            <TextInput
              style={[styles.input, styles.inputDescription]}
              value={donationDescription}
              onChangeText={setdonationDescription}
              placeholder="Enter a detailed description of your donation"
              multiline
            />

            <Text style={styles.label}>
              Donation Quantity (Enter 1 if not applicable)
            </Text>
            <TextInput
              style={styles.input}
              value={donationQuantity}
              onChangeText={setDonationQuantity}
              placeholder="Enter the quantity of your donation"
            />

            <Text style={styles.label}>
              Donation Condition (Used, New, etc.)
            </Text>
            <TextInput
              style={styles.input}
              value={donationCondition}
              onChangeText={setDonationCondition}
              placeholder="Enter the condition of your donation"
            />

            <Text style={styles.label}>Donation Location (City, State)</Text>
            <TextInput
              style={styles.input}
              value={donationLocation}
              onChangeText={setDonationLocation}
              placeholder="Enter the location you are donating from"
            />

            <View style={{ width: "100%", alignItems: "center" }}>
              <AccentButton onPress={pickImage}>Add Image</AccentButton>
              {donationImage && (
                <Image
                  source={{ uri: donationImage }}
                  style={{ width: 200, height: 200 }}
                />
              )}
            </View>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <AccentButton onPress={async () => handleComplete()}>Complete</AccentButton>
          <View style={{ height: 18 }}></View>
          <Button isBackButton>Go Back</Button>
        </View>
      </SafeAreaView>
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
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 17,
    padding: 10,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15,
  },
  inputDescription: {
    height: SCREEN_HEIGHT * 0.1, // Set height for multiline input
  },
});

export default Page;

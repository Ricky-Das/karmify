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
import { useLocalSearchParams, router } from "expo-router";
import SmallTopHeader from "../../components/SmallTopHeader";
import AppColors from "../../components/AppColors";
import getRequestById from "../../backend/backendFunctions/getRequestById";
import AccentHeader from "../../components/AccentHeader";
import AccentButton from "../../components/AccentButton";
import Button from "../../components/Button";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function Page() {
  const [requestTitle, setRequestTitle] = useState("");
  const [requestDescription, setRequestDescription] = useState("");
  const [requestCategory, setRequestCategory] = useState("");

  const handleComplete = () => {
    // TODO: Add "Add Request" logic here
    router.replace("/requests");
  };

  return (
    <View style={styles.container}>
      <SmallTopHeader>Request a Donation</SmallTopHeader>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: AppColors.secondaryBackground,
        }}
      >
        <View style={styles.contentContainer}>
          <ScrollView>
            <Text style={styles.label}>Request Title</Text>
            <TextInput
              style={styles.input}
              value={requestTitle}
              onChangeText={setRequestTitle}
              placeholder="Enter the title of your request"
            />

            <Text style={styles.label}>Request Description</Text>
            <TextInput
              style={[styles.input, styles.inputDescription]}
              value={requestDescription}
              onChangeText={setRequestDescription}
              placeholder="Enter a detailed description of your request"
              multiline
            />

            <Text style={styles.label}>Request Category</Text>
            <TextInput
              style={styles.input}
              value={requestCategory}
              onChangeText={setRequestCategory}
              placeholder="Enter the category of your request"
            />
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <AccentButton onPress={handleComplete}>Complete</AccentButton>
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

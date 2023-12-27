import React, { useEffect, useState, useRef } from "react";
import { Animated, Easing } from "react-native";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import SmallTopHeader from "../../../components/SmallTopHeader";
import AppColors from "../../../components/AppColors";
import getRequestById from "../../../backend/backendFunctions/getRequestById";
import AccentHeader from "../../../components/AccentHeader";
import DeleteButton from "../../../components/DeleteButton";
import Button from "../../../components/Button";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function Page() {
  const params = useLocalSearchParams();
  const { id } = params;
  const [request, setRequest] = useState(null);

  useEffect(() => {
    async function fetchRequest() {
      const request = await getRequestById(id);
      setRequest(request);
    }

    fetchRequest();
  }, [id]);

  const handleDelete = () => {
    // TODO: Add delete logic here
    router.push("/requests");
  };

  return (
    <View style={styles.container}>
      <SmallTopHeader>Request Information</SmallTopHeader>

      {request ? (
        <>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: AppColors.secondaryBackground,
            }}
          >
            <View style={styles.contentContainer}>
              <AccentHeader>Request Title</AccentHeader>
              <Text style={{ fontSize: 22 }}>{request.title}</Text>
              <AccentHeader style={{ paddingTop: SCREEN_WIDTH * 0.05 }}>
                Description
              </AccentHeader>
              <Text style={{ fontSize: 22 }}>{request.description}</Text>
              <AccentHeader style={{ paddingTop: SCREEN_WIDTH * 0.05 }}>
                Category
              </AccentHeader>
              <Text style={{ fontSize: 22 }}>{request.category}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <DeleteButton onPress={() => handleDelete()}>
                Delete Request
              </DeleteButton>

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
});

export default Page;

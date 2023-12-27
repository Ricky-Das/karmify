import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import AppColors from "./AppColors";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function ProfileInfo({ imageUri, profileName, profileEmail, profilePhone }) {
  console.log(imageUri);
  return (
    <View style={styles.profileInfoContainer}>
      <View style={styles.profileDetailRow}>
        <Image
          source={{
            uri: imageUri,
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{profileName}</Text>
      </View>
      <View style={styles.profileDetailRow}>
        <Text style={styles.profileDetailLabel}>Email: </Text>
        <Text style={styles.profileDetail}>{profileEmail}</Text>
      </View>
      <View style={styles.profileDetailRow}>
        <Text style={styles.profileDetailLabel}>Phone Number:</Text>
        <Text style={styles.profileDetail}>{profilePhone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileInfoContainer: {
    paddingVertical: SCREEN_HEIGHT * 0.02,
  },
  profileDetailRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  profileImage: {
    width: SCREEN_WIDTH * 0.16, // Adjust size as needed
    height: SCREEN_WIDTH * 0.16, // Adjust size as needed
    borderRadius: SCREEN_WIDTH * 0.16 * 0.5, // Half the width and height to create a circle
    marginRight: 10, // Add some spacing between the image and the name
  },
  profileName: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  profileDetailLabel: {
    fontSize: 20,
  },
  profileDetail: {
    fontSize: 20,
  },
});

export default ProfileInfo;

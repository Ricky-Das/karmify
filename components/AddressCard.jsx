import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AppColors from "./AppColors";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const AddressCard = ({ address, isSelected, onSelect }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selectedCard]}
      onPress={onSelect}
    >
      <View>
        <Text style={styles.text}>
          {address.firstName} {address.lastName}
        </Text>
      </View>

      <View>
        <Text style={styles.text}>
          {address.addressLine1} {address.addressLine2}
        </Text>
      </View>

      <View>
        <Text style={styles.text}>
          {address.city}, {address.state} {address.zip}
        </Text>
      </View>

      <View>
        <Text style={styles.text}>{address.country}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.165,
    backgroundColor: AppColors.primaryBackground,
    borderRadius: 17,
    marginVertical: 10,
    shadowColor: "#000", // Color of the shadow
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 }, // Shape of the shadow
    shadowOpacity: 0.25, // Opacity of the shadow
    shadowRadius: 3.84, // Blur radius of the shadow
    elevation: 5, // for Android
    paddingLeft: 16,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  text: {
    fontSize: 18,
    color: AppColors.secondaryText,
    paddingVertical: 5,
  },
});

export default AddressCard;

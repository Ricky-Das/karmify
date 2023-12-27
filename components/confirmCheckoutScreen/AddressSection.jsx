import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AccentHeader from "../AccentHeader";
import AppColors from "../AppColors";

function AddressSection(props) {
  const { address } = props;
  return (
    <View>
      <AccentHeader style={{ paddingTop: 20 }}>Delivery Address</AccentHeader>
      <View>
        <Text style={styles.addressText}>
          {address.firstName} {address.lastName}
        </Text>
      </View>

      <View>
        <Text style={styles.addressText}>
          {address.addressLine1} {address.addressLine2}
        </Text>
      </View>

      <View>
        <Text style={styles.addressText}>
          {address.city}, {address.state} {address.zip}
        </Text>
      </View>

      <View>
        <Text style={styles.addressText}>{address.country}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addressText: {
    fontSize: 18,
    color: AppColors.secondaryText,
    paddingVertical: 3,
  },
});

export default AddressSection;

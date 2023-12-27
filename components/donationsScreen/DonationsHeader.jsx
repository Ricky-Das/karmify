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

function DonationsHeader(props) {
  const handleCartPress = () => {
    router.push("donations/cart");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://cdn.discordapp.com/attachments/747489327260631099/1179896082117963786/donations_header.png?ex=657b72db&is=6568fddb&hm=7383935c24f888cf353549a7e3ce8141ca5a8c8f6478d560a30c4276aa86efe5&",
        }}
        style={styles.image}
      >
        <Text style={styles.text}>Donations</Text>
        <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
          <Ionicons name="cart" size={24} color="black" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    height: Dimensions.get("window").height * 0.2,
    width: Dimensions.get("window").width * 1.08,
    justifyContent: "center",
    paddingLeft: 20,
    position: "relative", // Added to position the cart button
  },
  text: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
  },
  cartButton: {
    position: "absolute",
    top: 22,
    right: 30,
    backgroundColor: "white",
    borderRadius: 200,
    padding: 10,
  },
});

export default DonationsHeader;

import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import NavBar from "../components/NavBar";
import AppColors from "../components/AppColors";
import { CartProvider } from "../components/CartContext";
import LoginScreen from "./auth/login";
import RegisterScreen from "./auth/register";
import { NavigationContainer } from '@react-navigation/native';


import { getAddressItems, getDonationItems, getRequestItems, getDeliveryItems } from "../backend/firebase-functions";
import { setDonationList } from "../backend/backendLists/donationsTable";
import { setAddressesList } from "../backend/backendLists/addressTable";
import { setRequestsList } from "../backend/backendLists/requestsTable";
import { setDeliveriesList } from "../backend/backendLists/deliveriesTable";
import { login, register } from "../backend/user-functions";


const _layout = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    //move all of this into a handle login function so it only retrieves data once user is authenticated
    const fetchBackendData = async () => {
      await login()
      const donations = await getDonationItems()
      const requests = await getRequestItems()
      const addresses = await getAddressItems()
      const deliveries = await getDeliveryItems()

      setDonationList(donations)
      setRequestsList(requests)
      setAddressesList(addresses)
      setDeliveriesList(deliveries)
      console.log("recieved data")
      setLoading(false)
    }

    fetchBackendData()
  }, [])

  if (isLoading) {
    return (
      <View style={styles.container}>
        <LoginScreen />
      </View>
    )
  }
  else {
    return (
      <CartProvider>
        <View style={styles.container}>
          <Slot />
          <NavBar />
        </View>
      </CartProvider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.secondaryBackground,
  },
});

export default _layout;

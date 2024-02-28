import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import NavBar from "../components/NavBar";
import AppColors from "../components/AppColors";
import { CartProvider } from "../components/CartContext";

import { getAddressItems, getDonationItems, getRequestItems, getDeliveryItems } from "../backend/firebase-functions";
import { setDonationList } from "../backend/backendLists/donationsTable";
import { setAddressesList } from "../backend/backendLists/addressTable";
import { setRequestsList } from "../backend/backendLists/requestsTable";
import { setDeliveriesList } from "../backend/backendLists/deliveriesTable";
import { login, register } from "../backend/user-functions";


const _layout = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
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
    return null
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

import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import NavBar from "../components/NavBar";
import AppColors from "../components/AppColors";
import { CartProvider } from "../components/CartContext";

import { getAddresses, getDonationItems, getRequests, getDeliveries } from "../backend/firebase-functions";
import { setDonationList } from "../backend/backendLists/donationsTable";
import { setAddressesList } from "../backend/backendLists/addressTable";
import { setRequestsList } from "../backend/backendLists/requestsTable";
import { setDeliveriesList } from "../backend/backendLists/deliveriesTable";


const _layout = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBackendData = async() => {
        const donations =  await getDonationItems()
        const requests =  await getRequests()
        const addresses =  await getAddresses()
        const deliveries = await getDeliveries()
      
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

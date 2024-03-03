import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import { router } from "expo-router";
import SmallTopHeader from "../../../components/SmallTopHeader";
import AppColors from "../../../components/AppColors";
import AccentHeader from "../../../components/AccentHeader";
import AddressCard from "../../../components/AddressCard";
import AccentButton from "../../../components/AccentButton";
import Button from "../../../components/Button";
import Notification from "../../../components/Notification";
import { getAddressesList } from "../../../backend/backendLists/addressTable";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function SelectAddress() {
  const [allAddresses, setAllAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationKey, setNotificationKey] = useState(0);

  useEffect(() => {
    const fetchAddresses = async () => {
      const addresses =  getAddressesList();
      setAllAddresses(addresses);
    };

    fetchAddresses();
  }, []);

  const handleSelectAddress = (address) => {
    setSelectedAddressId(address.id);
    setSelectedAddress(address);
  };

  const renderItem = ({ item }) => {
    return (
      <AddressCard
        address={item}
        isSelected={item.id === selectedAddressId}
        onSelect={() => handleSelectAddress(item)}
      />
    );
  };

  const handleConfirmAddress = () => {
    if (!selectedAddress) {
      setShowNotification(true);
      setNotificationKey((prevKey) => prevKey + 1);
      return;
    }
    router.push({
      pathname: "/donations/checkout/confirm",
      params: { address: JSON.stringify(selectedAddress) },
    });
  };

  const handleAddAddress = () => {
    router.push("/donations/checkout/add-address");
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <SmallTopHeader>Checkout</SmallTopHeader>
      <Notification
        key={notificationKey}
        text={"Please select an address"}
        isVisible={showNotification}
        type={"Danger"} // Can be "Success", "Warning", or "Danger"
      />
      <View style={{ backgroundColor: AppColors.secondaryBackground }}>
        <AccentHeader
          style={{ paddingTop: 20, paddingLeft: SCREEN_WIDTH * 0.05 }}
        >
          Select A Delivery Address
        </AccentHeader>
        <View style={styles.screenContentContainer}>
          <FlatList
            data={allAddresses}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.addressListContainer}
            extraData={selectedAddressId}
            ListFooterComponent={
              <View style={styles.addButtonContainer}>
                <AccentButton onPress={() => handleAddAddress()}>
                  Add Address
                </AccentButton>
              </View>
            }
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <AccentButton onPress={() => handleConfirmAddress()}>
          Confirm Address
        </AccentButton>

        <View style={{ height: 18 }}></View>
        <Button isBackButton>Go Back</Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addButtonContainer: {
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  addressListContainer: {
    width: SCREEN_WIDTH,
    backgroundColor: AppColors.secondaryBackground,
    alignItems: "center",
  },
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.17,
    backgroundColor: AppColors.secondaryBackground,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: AppColors.primaryBackground,
  },
  screenContentContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.57,
    paddingTop: 20,
    backgroundColor: AppColors.secondaryBackground,
  },
});

export default SelectAddress;

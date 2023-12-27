import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Dimensions, StyleSheet } from "react-native";
import { router } from "expo-router";
import SearchBar from "../../components/SearchBar";
import LargePlainHeader from "../../components/LargePlainHeader";
import { FlatList } from "react-native-gesture-handler";
import Fuse from "fuse.js";
import DeliveryCard from "../../components/deliveriesScreen/DeliveryCard";
import getAllDeliveriesByUserId from "../../backend/backendFunctions/getAllDeliveriesByUserId";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function index(props) {
  const [allDeliveries, setAllDeliveries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchDeliveries = async () => {
      const deliveries = await getAllDeliveriesByUserId("1"); // Assuming this is an async function
      setAllDeliveries(deliveries);
      setSearchResults(deliveries);
    };

    fetchDeliveries();
  }, []);

  const updateSearch = (text) => {
    setSearchTerm(text);
    const options = {
      keys: ["donationTitle"],
      includeScore: true,
    };
    const fuse = new Fuse(allDeliveries, options);

    if (text.length > 0) {
      const results = fuse.search(text);
      setSearchResults(results.map((result) => result.item));
    } else {
      setSearchResults(allDeliveries);
    }
  };

  const renderItem = ({ item }) => {
    return <DeliveryCard deliveryInfo={item} />;
  };

  const handleAddRequest = () => {
    router.push("/requests/add-request");
  };

  return (
    <View>
      <SafeAreaView>
        <LargePlainHeader headerText="My Deliveries" />
        <SearchBar onChange={updateSearch} />
        <View style={{ height: SCREEN_HEIGHT * 0.6 }}>
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
});

export default index;

import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Dimensions, StyleSheet } from "react-native";
import { router } from "expo-router";
import SearchBar from "../../components/SearchBar";
import LargePlainHeader from "../../components/LargePlainHeader";
import RequestCard from "../../components/requests/RequestCard";
import { FlatList } from "react-native-gesture-handler";
import AccentButton from "../../components/AccentButton";
import Fuse from "fuse.js";
import { getRequestsList } from "../../backend/backendLists/requestsTable";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function index(props) {
  const [allRequests, setAllRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const requests =  getRequestsList(); // Assuming this is an async function
      setAllRequests(requests);
      setSearchResults(requests);
    };

    fetchRequests();
  }, []);

  const updateSearch = (text) => {
    setSearchTerm(text);
    const options = {
      keys: ["title"],
      includeScore: true,
    };
    const fuse = new Fuse(allRequests, options);

    if (text.length > 0) {
      const results = fuse.search(text);
      setSearchResults(results.map((result) => result.item));
    } else {
      setSearchResults(allRequests);
    }
  };

  const renderItem = ({ item }) => {
    return <RequestCard requestInfo={item} />;
  };

  const handleAddRequest = () => {
    router.push("/requests/add-request");
  };

  return (
    <View>
      <SafeAreaView>
        <LargePlainHeader headerText="My Requests" />
        <SearchBar onChange={updateSearch} />
        <View style={{ height: SCREEN_HEIGHT * 0.6 }}>
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AccentButton onPress={() => handleAddRequest()}>
            Add Request
          </AccentButton>
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

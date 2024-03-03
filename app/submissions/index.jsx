import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";
import LargePlainHeader from "../../components/LargePlainHeader";
import getAllDonationsByUserId from "../../backend/backendFunctions/getAllDonationsByUserId";
import Fuse from "fuse.js";
import SearchBar from "../../components/SearchBar";
import DonationCard from "../../components/DonationCard";
import AccentButton from "../../components/AccentButton";
import { router } from "expo-router";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function index(props) {
  const [allSubmissions, setAllSubmissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const submissions = await getAllDonationsByUserId(
        "YmlIC1KougX6CK0UPiP2MukHCTT2"
      ); // Assuming this is an async function
      setAllSubmissions(submissions);
      setSearchResults(submissions);
    };

    fetchSubmissions();
  }, []);

  const updateSearch = (text) => {
    setSearchTerm(text);
    const options = {
      keys: ["title"],
      includeScore: true,
    };
    const fuse = new Fuse(allSubmissions, options);

    if (text.length > 0) {
      const results = fuse.search(text);
      setSearchResults(results.map((result) => result.item));
    } else {
      setSearchResults(allSubmissions);
    }
  };

  const renderItem = ({ item }) => {
    return <DonationCard donationInfo={item} addToCartButton={false} />;
  };

  handleAddSubmission = () => {
    router.push("/submissions/add-submission");
  };

  return (
    <View>
      <SafeAreaView>
        <LargePlainHeader headerText="My Submissions" />
        <SearchBar onChange={updateSearch} />
        <View style={{ height: SCREEN_HEIGHT * 0.6 }}>
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              alignItems: "center",
              paddingBottom: SCREEN_HEIGHT * 0.1,
            }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <AccentButton onPress={() => handleAddSubmission()}>
            Add Submission
          </AccentButton>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default index;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
});

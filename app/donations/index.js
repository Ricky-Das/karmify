import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, FlatList, SafeAreaView } from "react-native";
import DonationsHeader from "../../components/donationsScreen/DonationsHeader";
import AppColors from "../../components/AppColors";
import SearchBar from "../../components/SearchBar";
import DonationCard from "../../components/DonationCard";
import Fuse from "fuse.js";

import { getDonationList } from "../../backend/backendLists/donationsTable";

const SCREEN_HEIGHT = Dimensions.get("window").height;


export default Page = () => {
  const [allDonations, setAllDonations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      const donations = getDonationList(); // Assuming this is an async function
      setAllDonations(donations);
      setSearchResults(donations);
    };

    fetchDonations();
  }, []);

  const updateSearch = (text) => {
    console.log("searching");
    setSearchTerm(text);
    const fuse = new Fuse(allDonations, {
      keys: ["title"],
      includeScore: true,
    });

    if (text.length > 0) {
      const results = fuse.search(text);
      setSearchResults(results.map((result) => result.item));
    } else {
      setSearchResults(allDonations);
    }
  };

  const renderItem = ({ item }) => {
    return <DonationCard donationInfo={item} />;
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <DonationsHeader />
      <SearchBar onChange={updateSearch} />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => `donation-${item.id}`}
        contentContainerStyle={styles.donationCardsContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  donationCardsContainer: {
    alignItems: "center",
    paddingBottom: SCREEN_HEIGHT * 0.1,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: AppColors.secondaryBackground,
  },
});

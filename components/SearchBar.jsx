import React, { useRef } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SCREEN_HEIGHT = Dimensions.get("window").height;

function SearchBar({ onChange }) {
  const searchInputRef = useRef();

  const focusSearchInput = () => {
    searchInputRef.current.focus();
  };

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity
        style={styles.searchBar}
        onPress={focusSearchInput}
        activeOpacity={0.7}
      >
        <Ionicons
          name="ios-search"
          size={20}
          color="grey"
          style={styles.searchIcon}
        />
        <TextInput
          ref={searchInputRef}
          placeholder="Search..."
          style={styles.searchInput}
          returnKeyType="search"
          onChangeText={onChange} // Step 2: Pass onChange to TextInput
          autoCapitalize="none" // Typically, search terms are not auto-capitalized.
          autoCorrect={false} // Disable auto-correct
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    height: SCREEN_HEIGHT * 0.04,
    width: "90%",
    backgroundColor: "#FFF",
    flexDirection: "row",
    borderRadius: 17,
    alignItems: "center",
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
  searchContainer: {
    height: SCREEN_HEIGHT * 0.06,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
});

export default SearchBar;

import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import LargePlainHeader from "../../components/LargePlainHeader";

function index(props) {
  return (
    <View>
      <SafeAreaView>
        <LargePlainHeader headerText="My Submissions" />
      </SafeAreaView>
    </View>
  );
}

export default index;

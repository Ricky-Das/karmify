import React from "react";
import { View, Text, SafeAreaView, Dimensions, StyleSheet } from "react-native";
import LargePlainHeader from "../../components/LargePlainHeader";
import ProfileInfo from "../../components/ProfileInfo";
import AccentButton from "../../components/AccentButton";
import { auth } from "../../backend/firebase-config";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const handleLowIncomeButtonPress = () => {
  //TODO: Implement low income verification
  console.log("low income button pressed");
};

function index() {
  return (
    <View>
      <SafeAreaView>
        <LargePlainHeader headerText="Profile" />
        <View style={{ paddingHorizontal: SCREEN_WIDTH * 0.05 }}>
          <ProfileInfo
            imageUri={
              "https://cdn.discordapp.com/attachments/747489327260631099/1189359652656386080/driverImage.png?ex=659de07e&is=658b6b7e&hm=c32a3b308ae117cc89bbeae7c34d5143ff5de96bfaafd6852c184ac68ce50f7e&"
            }
            profileName={"John Doe"}
            profileEmail={"johndoe@gmail.com"}
            profilePhone={"123456789"}
          />
        </View>
        <View
          style={{
            paddingLeft: SCREEN_WIDTH * 0.05,
            height: 1.5,
            backgroundColor: "#CFCFCF",
          }}
        ></View>
        <View
          style={{
            width: SCREEN_WIDTH,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: SCREEN_HEIGHT * 0.025,
          }}
        >
          <AccentButton
            style={{ width: SCREEN_WIDTH * 0.6 }}
            onPress={() => handleLowIncomeButtonPress()}
          >
            Low Income Verification
          </AccentButton>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default index;

import React, { useEffect, useRef } from "react";
import { Animated, Easing, Text, StyleSheet } from "react-native";
import AppColors from "./AppColors";

const Notification = ({ text, isVisible, type }) => {
  const slideAnim = useRef(new Animated.Value(-100)).current;

  // Define background color based on type
  const backgroundColor =
    type === "Warning"
      ? AppColors.warning
      : type === "Danger"
      ? AppColors.error
      : AppColors.success; // Default to 'Success'

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 50, // Height of the notification to slide in
        duration: 500,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }).start(() => {
        setTimeout(() => {
          Animated.timing(slideAnim, {
            toValue: -100, // Slide back to original position
            duration: 100,
            useNativeDriver: true,
            easing: Easing.in(Easing.cubic),
          }).start();
        }, 3000);
      });
    }
  }, [isVisible, slideAnim]);

  return (
    <Animated.View
      style={[
        styles.notification,
        {
          transform: [{ translateY: slideAnim }],
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <Text style={styles.notificationText}>{text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  notification: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  notificationText: {
    color: "white",
    fontSize: 16,
  },
});

export default Notification;

import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";

const OnboardingScreenTwo = () => {
  const insets = useSafeAreaInsets();
  const SafeStyle = styles(insets);
  return (
    <View style={SafeStyle.container}>
      <Text>OnboardingScreenTwo</Text>
    </View>
  );
};

export default OnboardingScreenTwo;

const styles = (insets) =>
  StyleSheet.create({
    container: {
      // Paddings to handle safe area
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  });

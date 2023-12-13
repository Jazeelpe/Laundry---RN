import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const OnboradingFooter = ({ activeIndex, handlenavigation }) => {
  return (
    <View
      style={[
        styles.navigationConatiner,
        { backgroundColor: activeIndex === 0 ? "#FFF" : "#00C464" },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "#FFFF",
            fontSize: 20,
            color: activeIndex === 0 ? "#FFF" : "#00C464",
          }}
        >
          prev
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <View
          style={[
            styles.round,
            {
              backgroundColor: activeIndex === 0 ? "#00C464" : "#193628"}
          ]}
        ></View>
        <View
        style={[
          styles.round,
          {
            backgroundColor: activeIndex === 0 ? "#193628" : "#fff",
          },
        ]}
        ></View>
      </View>
      <TouchableOpacity
        onPress={handlenavigation}
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            color: "#00C464",
            fontSize: 20,
            color: activeIndex === 0 ? "#00C464" : "#FFF",
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboradingFooter;

const styles = StyleSheet.create({
  navigationConatiner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  round: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

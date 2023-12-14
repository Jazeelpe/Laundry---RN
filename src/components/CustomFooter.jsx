import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import React from "react";

const data = [
  {
    image: require("../assets/images/home-icon-active.png"),
  },
  {
    image: require("../assets/images/booking-icon.png"),
  },
  {
    image: require("../assets/images/history-icon.png"),
  },
  {
    image: require("../assets/images/dot-icon.png"),
  },
];

const CustomFooter = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((item, index) => {
        const isFocused = state.index === index;
        const icon =
          item.name === "NewStack"
            ? require("../assets/images/home-icon.png")
            : item.name === "Booking"
            ? require("../assets/images/booking-icon.png")
            : item.name === "History"
            ? require("../assets/images/history-icon.png")
            : require("../assets/images/dot-icon.png");

        const icon2 =
            item.name === "NewStack"
            ? require("../assets/images/home-icon-active.png")
            :  item.name === "Booking"
            ? require("../assets/images/booking-icon-active.png")
            :  item.name === "History"
            ? require("../assets/images/history-icon-active.png")
            : require("../assets/images/dot-icon-active.png")

        return (
          <TouchableOpacity
            style={styles.mapContainer}
            key={item.key}
            onPress={() => navigation.navigate(item.name)}
          >
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={isFocused ? icon2: icon}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomFooter;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    height: 60,
    backgroundColor:"#FFFF"

  },
  mapContainer: {},
});

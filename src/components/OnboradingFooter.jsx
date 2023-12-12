import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const OnboradingFooter = () => {
  return (
    <View style={styles.navigationConatiner}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: "#FFFF", fontSize: 20 }}>prev</Text>
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
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: " #00C464",
          }}
        ></View>
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: "#193628",
          }}
        ></View>
      </View>
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Text style={{ color: "#00C464", fontSize: 20 }}>Next</Text>
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
});

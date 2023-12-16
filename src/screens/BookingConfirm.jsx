import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BookingConfirm = () => {
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const  navigation = useNavigation()

  return (
    <View style={safeAreaStyle.mainContainer}>
      <View>
        <View style={{ alignSelf: "center" }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/images/confirm-tick.png")}
          />
        </View>
        <Text style={safeAreaStyle.mainText}>Booking Confirmed</Text>
        <View style={{ alignSelf: "center", paddingHorizontal: 20 }}>
          <Text style={safeAreaStyle.text}>
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Text>
        </View>
        <Text style={{ color: "#FF1313", fontSize: 18, alignSelf: "center" }} onPress={()=>navigation.goBack()}>
          Close
        </Text>
      </View>
    </View>
  );
};

export default BookingConfirm;

const styles = (insets) =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: "column",
      justifyContent: "center",
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: "#FFFF",
    },
    mainText: {
      fontWeight: "500",
      fontSize: 18,
      marginTop: 35,
      marginBottom: 15,
      textAlign: "center",
    },
    text: {
      fontSize: 18,
      marginBottom: 45,
      alignSelf: "center",
      textAlign: "center",
    },
  });

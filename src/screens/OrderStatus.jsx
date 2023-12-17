import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

const OrderStatus = () => {
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation  = useNavigation()
  return (
    <View style={safeAreaStyle.mainContainer}>
      <View style={safeAreaStyle.container}>
        <View style={safeAreaStyle.headerContainer}>
          <TouchableOpacity style={{ flex: 1 }} onPress={()=>navigation.goBack()}>
            <Image
              style={{ width: 35, height: 30 }}
              source={require("../assets/images/back.png")}
            />
          </TouchableOpacity>
          <Text style={{ flex: 2.5 }}>24th May 2018, 05:00 PM</Text>
        </View>
        <View style={{ marginBottom: 25 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Order ID</Text>

          <Text style={{ fontSize: 14, fontWeight: "300" }}>
            #LNDRY000124356
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 25,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Total</Text>
          <Text style={{ fontSize: 18, fontWeight: "500", color: "#00C464" }}>
            ₹800
          </Text>
        </View>
        <View>
          <View>
            <View style={safeAreaStyle.billContainer}>
              <Text style={{ fontSize: 14, fontWeight: "400" }}>Cotton</Text>
              <Text style={{ fontSize: 14, fontWeight: "300" }}>5nos</Text>
              <Text style={{ fontSize: 16, fontWeight: "400" }}>₹200</Text>
            </View>

            <View style={safeAreaStyle.billContainer}>
              <Text style={{ fontSize: 14, fontWeight: "400" }}>Cotton</Text>
              <Text style={{ fontSize: 14, fontWeight: "300" }}>5nos</Text>
              <Text style={{ fontSize: 16, fontWeight: "400" }}>₹200</Text>
            </View>

            <View style={safeAreaStyle.billContainer}>
              <Text style={{ fontSize: 14, fontWeight: "400" }}>Cotton</Text>
              <Text style={{ fontSize: 14, fontWeight: "300" }}>5nos</Text>
              <Text style={{ fontSize: 16, fontWeight: "400" }}>₹200</Text>
            </View>
          </View>
        </View>

        <View style={safeAreaStyle.progressContainer}>
          <Image
            style={{ width: "100%", height: 100 }}
            source={require("../assets/images/status.png")}
          />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Delivered To</Text>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>
            238 allahabad street, sanitorium, chennai.
          </Text>
        </View>
        <View style={{marginTop:100}}>
          <Button btnText={"Mail Invoice"} />
        </View>
      </View>
    </View>
  );
};

export default OrderStatus;

const styles = (insets) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: "#FFFF",
    },
    container: {
      paddingHorizontal: 20,
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 20,
    },
    billContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 25,
      borderBottomWidth: 1,
      borderBottomColor: "#979797",
      paddingVertical: 10,
    },
    progressContainer: {
      marginVertical: 30,
    },
  });

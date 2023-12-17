import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { ACTIVEADDRESS } from "../store/userSlice";
const data = [
  { id: 1, address: "238 allahabad street,  sanitorium, chennai." },
  { id: 2, address: "81 Will Pines Apt. 608, Egmore, Eroad." },
  { id: 3, address: "85 Water Pines Apt. 610, Egmore, Eroad." },
];

const SavedAdressPage = () => {
  const [active, setActive] = useState(0);
  const [addressValue, setAddressValue] = useState(
    "238 allahabad street,  sanitorium, chennai."
  );
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();

  return (
    <View style={safeAreaStyle.maincontainer}>
      <View style={safeAreaStyle.container}>
        <View style={safeAreaStyle.headerSection}>
          <TouchableOpacity
            style={{ flex: 2 }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: 35, height: 30 }}
              source={require("../assets/images/back.png")}
            />
          </TouchableOpacity>
          <Text style={{ fontWeight: "600", flex: 3 }}>Saved Address</Text>
        </View>
        <View style={safeAreaStyle.mainSection}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={safeAreaStyle.mapcontainer}
                onPress={() => {
                  setActive(index);
                  setAddressValue(item.address);
                  dispatch(
                    ACTIVEADDRESS({
                      activeAddress: addressValue,
                    })
                  );
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{item.address}</Text>
                  {active === index ? (
                    <Image source={require("../assets/images/tick.png")} />
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default SavedAdressPage;

const styles = (insets) =>
  StyleSheet.create({
    maincontainer: {
      // Paddings to handle safe area
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    container: {
      paddingHorizontal: 20,
      paddingTop: 15,
    },
    headerSection: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
    },
    mapcontainer: {
      marginVertical: 10,
      paddingVertical: 10,
    },
    mainSection: {
      marginVertical: 30,
    },
  });

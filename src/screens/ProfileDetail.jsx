import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const ProfileDetail = () => {
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();
  return (
    <View style={safeAreaStyle.maincontainer}>
      <View style={safeAreaStyle.container}>
        <View style={safeAreaStyle.headerSection}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image
              style={{ width: 35, height: 30 }}
              source={require("../assets/images/back.png")}
            />
          </TouchableOpacity>
          <Text style={{ fontWeight: "600" }}>Profile</Text>
          <Text style={{ color: "#00C464" }}>Edit</Text>
        </View>
        <View style={safeAreaStyle.mainSection}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginVertical: 30,
            }}
          >
            <Image
              style={{ width: 80, height: 80 }}
              source={require("../assets/images/userimg.png")}
            />
            <Text style={{ fontSize: 20, marginVertical: 25 }}>
              Phillip Mathis
            </Text>
          </View>
          <View style={{
              flexDirection: "column",
              alignItems: "center",
             
            }}>
            <Text>483-930-7078</Text>
            <Text>015 Rolfson Inlet Apt. 700, Lake Linda, Saint Helena</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileDetail;

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
      paddingTop: 25,
    },
    headerSection: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
    },
  });

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

const NotificationPage = () => {
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();
  return (
    <View style={safeAreaStyle.maincontainer}>
      <View style={safeAreaStyle.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 35, height: 30 }}
            source={require("../assets/images/back.png")}
          />
        </TouchableOpacity>
        <Text style={safeAreaStyle.header}>Notifications</Text>
        <Text>Select your notification preference</Text>
        <View style={{ marginTop: 55 }}>
          <View style={{ marginBottom: 35 }}>
            <RadioButtonItem
              radioBackground="green"
          
              value="test"
              label={
                <TouchableOpacity
                  style={{ width: "100%", paddingHorizontal: 15 }}
                  onPress={() => setCurrent("test1")}
                >
                  <Text style={{ fontWeight: "700" }}>Notify me on every process</Text>
                </TouchableOpacity>
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationPage;

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
    header: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 35,
        marginBottom: 5,
      },
  });

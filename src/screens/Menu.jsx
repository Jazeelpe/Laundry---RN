import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    section: "Phone Number",
    details: "483-930-7078",
  },
  {
    id: 2,
    section: "Address",
    details: "015 Rolfson Inlet Apt. 700",
    route: "AddressPage",
  },
  {
    id: 3,
    section: "Payments",
    details: "Axis Credit Card",
    route: "PaymentPage",
  },
  {
    id: 4,
    section: "Notification",
    details: "Notify by process",
    route: "NotificationPage",
  },
  {
    id: 5,
    section: "Support",
  },
  {
    id: 6,
    section: "Share",
  },
  {
    id: 7,
    section: "Terms & Condition",
  },
  {
    id: 8,
    section: "Signout",
  },
];

const Menu = () => {
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();

  const handleNavigation = (route) => {
    navigation.navigate(route);
  };
  return (
    <View style={safeAreaStyle.maincontainer}>
      <View style={safeAreaStyle.container}>
        <View style={safeAreaStyle.topsection}>
          <View style={safeAreaStyle.userconatiner}>
            <View style={safeAreaStyle.imageconatiner}>
              <Image source={require("../assets/images/userimg.png")} />
            </View>
            <View style={safeAreaStyle.userdetails}>
              <Text style={{ fontSize: 20 }}>Phillip Mathis</Text>
              <Text
                style={{ fontSize: 14, color: "#00C464" }}
                onPress={() => navigation.navigate("ProfileDetail")}
              >
                View Profile
              </Text>
            </View>
          </View>
          <View style={safeAreaStyle.bellicon}>
            <Image source={require("../assets/images/bell-icon.png")} />
          </View>
        </View>
      </View>
      <View style={{ height: 10, backgroundColor: "#979797" }}></View>
      <View style={safeAreaStyle.container}>
        {data.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={safeAreaStyle.mapconatiner}
              onPress={item.route ? ()=>handleNavigation(item.route) : null}
            >
              <Text
                style={{
                  color: item.section === "Signout" ? "#FF1313" : "#000",
                }}
              >
                {item.section}
              </Text>
              {item.details ? (
                <Text
                  style={{
                    color: item.section === "Phone Number" ? "#000" : "#00C464",
                  }}
                >
                  {item.details}
                </Text>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Menu;

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
    userconatiner: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
    },
    topsection: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 25,
    },
    mapconatiner: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 15,
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#979797",
    },
  });

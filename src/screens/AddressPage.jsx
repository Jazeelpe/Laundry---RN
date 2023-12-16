import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


const AddressPage = () => {
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();
  const [radioActive, setRadioActive] = useState(1);
  return (
    <View style={safeAreaStyle.maincontainer}>
      <View style={safeAreaStyle.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 35, height: 30 }}
            source={require("../assets/images/back.png")}
          />
        </TouchableOpacity>
        <Text style={safeAreaStyle.header}>Address</Text>
        <Text>Choose your default pickup address</Text>
        <View style={{ marginTop: 55 }}>
          <View style={{ marginBottom: 35 }}>
            {/* radio */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 20,
              }}
            >
              <View style={safeAreaStyle.radio}>
                <View
                  style={
                    radioActive === 1 ? safeAreaStyle.radioBackground : null
                  }
                ></View>
              </View>
              <TouchableOpacity
                style={{ width: "100%", paddingHorizontal: 15 }}
                onPress={()=>setRadioActive(1)}
              >
                <Text style={{ marginBottom: 5 }}>Home</Text>
                <Text style={{ fontWeight: "700" }}>
                  015 Rolfson Inlet Apt. 700, Lake Linda, Saint Helena
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {/* radio */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 20,
              }}
            >
              <View style={safeAreaStyle.radio}>
                <View
                  style={
                    radioActive === 2 ? safeAreaStyle.radioBackground : null
                  }
                ></View>
              </View>
              <TouchableOpacity
                style={{ width: "100%", paddingHorizontal: 15 }}
                onPress={()=>setRadioActive(2)}
              >
                <Text style={{ marginBottom: 5 }}>Home</Text>
                <Text style={{ fontWeight: "700" }}>
                  015 Rolfson Inlet Apt. 700, Lake Linda, Saint Helena
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddressPage;

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
    radio: {
      width: 25,
      height: 25,
      borderWidth: 2,
      borderColor: "#00C464",
      borderRadius: 15,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    radioBackground: {
      width: 15,
      height: 15,
      borderRadius: 7.5,
      backgroundColor: "#00C464",
    },
  });

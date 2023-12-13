import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import CustomTextInput from "../components/CustomTextInput";

const Agreement = () => {
  const [isChecked, setChecked] = useState(false);
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();

  return (
    <View style={safeAreaStyle.maincontainer}>
      <View style={safeAreaStyle.container}>
        <View style={safeAreaStyle.formContainer}>
          <View style={{ marginTop: 55 }}>
            <Text style={{ fontSize: 30, lineHeight: 40, color: "#000" }}>
              Update your resident and continue
            </Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 19,
                color: "#000",
                marginVertical: 8,
                width: "90%",
              }}
            >
              Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo,
              tortor mauris condimentum.
            </Text>
          </View>
          <View style={{ gap: 20 }}>
            <CustomTextInput placeholder="Address" type="multiline" />
          </View>
          <View style={safeAreaStyle.locationContainer}>
            <Image
              style={{ height: 20, width: 25, resizeMode: "contain" }}
              source={require("../assets/images/Location.png")}
            />
            <Text style={{ color: "#00C464" }}>Select place by map</Text>
          </View>
          <View style={safeAreaStyle.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#4630EB" : undefined}
            />
            <Text style={{ fontSize: 16 }}>Accept Terms & Conditions</Text>
          </View>
          <View style={{ paddingHorizontal: 70 }}>
            <Button
              btnText="Continue"
              handleNavigation={() => {
                navigation.navigate("MapScreen");
              }}
            />
          </View>
          <Text
            style={{
              alignSelf: "center",
              marginVertical: 100,
              color: "#00C464",
            }}
          >
            Terms and Conditions
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Agreement;

const styles = (insets) =>
  StyleSheet.create({
    maincontainer: {
      // Paddings to handle safe area
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    container: {
      height: "100%",
      backgroundColor: "#FFF",
    },
    imageContainer: {
      height: 100,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    image: {},
    formContainer: {
      flex: 1,
      flexDirection: "column",
      gap: 30,
      paddingHorizontal: 20,
      fontWeight: 700,
    },
    btnContainer: {
      height: 60,
      backgroundColor: "#00C464",
    },
    checkboxContainer: {
      marginBottom: 30,
      flexDirection: "row",
      alignItems: "center",
      gap: 15,
    },
    locationContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      alignSelf: "flex-end",
      marginBottom: 10,
    },
  });

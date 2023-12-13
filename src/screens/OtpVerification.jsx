import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { OtpInput } from "react-native-otp-entry";
import Button from "../components/Button";

const OtpVerification = () => {
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();

  const handleNaviagation = () => {
    navigation.navigate("Agreement");
  };

  return (
    <View style={safeAreaStyle.maincontainer}>
      <View style={safeAreaStyle.container}>
        <View style={safeAreaStyle.imageContainer}>
          <Image
            style={safeAreaStyle.image}
            source={require("../assets/images/Logo-green.png")}
          />
        </View>
        <View style={safeAreaStyle.formContainer}>
          <View>
            <Text style={{ fontSize: 30, lineHeight: 40, color: "#000" }}>
            Verification…
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
              Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
            </Text>
          </View>
          <View style={{ gap: 20 ,alignSelf:'center'}}>
          <Image style={{resizeMode:'contain',height:150,}} source={require('../assets/images/otp-bg.png')} />
          </View>
          <OtpInput numberOfDigits={6} onTextChange={(text) => console.log(text)} />
          <Text style={{ alignSelf: "flex-end",color:"#00C464" }}>Resend OTP</Text>
          <View style={{ paddingHorizontal: 70 }}>
            <Button btnText="Verify" handleNavigation={handleNaviagation} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OtpVerification;


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
  });

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import CustomTextInput from "../components/CustomTextInput";
import Button from "../components/Button";

const SignUp = () => {
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.goBack();
  };
  const handleOtpNav = ()=>{
    navigation.navigate('Otp')
  }

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
              Signup...
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
              tortor mauris condimentum nibh, ut fermentum massa justo sit amet
              risus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula.
            </Text>
          </View>
          <View style={{ gap: 20 }}>
            <CustomTextInput placeholder={"Name"} />
            <CustomTextInput placeholder={"Phone Number"} type="phone" />
            <CustomTextInput placeholder={"Email"} />
          </View>
          <View style={{ paddingHorizontal: 70 }}>
            <Button btnText="Signup" handleNavigation={handleOtpNav} />
          </View>
          <Text style={{ alignSelf: "center", marginVertical: 50 }}>
            Already have an account ?
          </Text>
        </View>
        <TouchableOpacity
          style={safeAreaStyle.btnContainer}
          onPress={handleNavigation}
        >
          <Text
            style={{
              fontSize: 18,
              lineHeight: 40,
              color: "#fff",
              textAlign: "center",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

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

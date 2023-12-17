import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import RadioButton from "../components/RadioButton";

const PaymentPage = () => {
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();
  const [selectedRadio, setSelectedRadio] = React.useState(null);
  const handleRadio = (radioId) => {
    setSelectedRadio(radioId);
  };
  return (
    <View style={safeAreaStyle.maincontainer}>
      <View style={safeAreaStyle.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 35, height: 30 }}
            source={require("../assets/images/back.png")}
          />
        </TouchableOpacity>
        <Text style={safeAreaStyle.header}>Saved Cards</Text>
        <Text>Choose your default payment card.</Text>
        <View style={{ marginTop: 55 }}>
          <View style={{ marginBottom: 35 }}>
            <View style={{ marginBottom: 35 }}>
              <RadioButton
                place="Axis bank credit card"
                address="53XX XXXX XXXX 1234"
                radioId={1}
                selectedRadio={selectedRadio}
                handleRadio={handleRadio}
                type="payments"
              />
            </View>
            <View style={{ marginBottom: 35 }}>
              <RadioButton
                place="Axis bank credit card"
                address="53XX XXXX XXXX 1234"
                radioId={2}
                selectedRadio={selectedRadio}
                handleRadio={handleRadio}
                type="payments"
              />
            </View>
            <RadioButton
              place="Axis bank credit card"
              address="53XX XXXX XXXX 1234"
              radioId={3}
              selectedRadio={selectedRadio}
              handleRadio={handleRadio}
              type="payments"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentPage;

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

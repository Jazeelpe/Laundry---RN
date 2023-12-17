import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import RadioButton from "../components/RadioButton";


const NotificationPage = () => {
  const [selectedRadio, setSelectedRadio] = React.useState(null);
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();
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
        <Text style={safeAreaStyle.header}>Notifications</Text>
        <Text>Select your notification preference</Text>
        <View style={{ marginTop: 55 }}>
          <View style={{ marginBottom: 35 }}>
          <View style={{ marginBottom: 35 }}>
              <RadioButton
                place=""
                address="Notify me on every process"
                radioId={1}
                selectedRadio={selectedRadio}
                handleRadio={handleRadio}
                type="notification"
              />
            </View>
            <View style={{ marginBottom: 35 }}>
              <RadioButton
                place=""
                address="All Notification"
                radioId={2}
                selectedRadio={selectedRadio}
                handleRadio={handleRadio}
                type="notification"
              />
            </View>
            <View style={{ marginBottom: 35 }}>
              <RadioButton
                place=""
                address="Notify me only at the time of delivery"
                radioId={3}
                selectedRadio={selectedRadio}
                handleRadio={handleRadio}
                type="notification"
              />
            </View>
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

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomTextInput from "../components/CustomTextInput";
import Button from "../components/Button";

const Booking = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [value,setValue] = useState(true)
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();
  console.log(date)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setValue(!value)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={safeAreaStyle.mainContainer}>
      <ScrollView style={safeAreaStyle.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={safeAreaStyle.header}>Washing</Text>
          <View>
            <Image source={require("../assets/images/bell-icon.png")} />
          </View>
        </View>
        <View style={{ marginVertical: 30 }}>
          <Text style={{ fontSize: 14 }}>
            Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor
            mauris condimentum.
          </Text>
        </View>
        <View style={{ marginVertical: 35 }}>
          <CustomTextInput
            placeholder={"Today"}
            type="booking"
            handleFocus={showDatepicker}
            value={value ? "Today" : date.toString()}
          />
          <View style={safeAreaStyle.absoluteContainer}>
            <Text style={safeAreaStyle.text}>When</Text>
          </View>
        </View>
        <View>
          <CustomTextInput placeholder={"Address"} type="booking" />
          <View style={safeAreaStyle.absoluteContainer}>
            <Text style={safeAreaStyle.text}>From</Text>
          </View>
        </View>
        <View style={{ marginVertical: 35 }}>
          <CustomTextInput placeholder={"0 nos"} type="bookingqty" />
          <View style={safeAreaStyle.absoluteContainer}>
            <Text style={safeAreaStyle.text}>Quantity</Text>
          </View>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Button btnText={"Confirm Booking"} handleNavigation={()=>navigation.navigate("ConfirmPage")} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 600,
              marginTop: 45,
              marginBottom: 8,
            }}
          >
            Note:
          </Text>
          <Text style={{ fontSize: 14 }}>
            Price is decided by the pickup man at the time of collecting your
            clothes
          </Text>
        </View>
      </ScrollView>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Booking;

const styles = (insets) =>
  StyleSheet.create({
    mainContainer: {
      backgroundColor: "#fff",
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    container: {
      paddingTop: 25,
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 30,
      fontWeight: "bold",
    },
    absoluteContainer: {
      position: "absolute",
      backgroundColor: "#00C464",
      height: 30,
      width: 80,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      top: -15,
      left: 8,
    },
    text: {
      color: "#fff",
    },
  });

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    text: "All",
  },
  {
    id: 2,
    text: "In Progress",
  },
  {
    id: 3,
    text: "Delivered",
  },
];

const History = () => {
  const [active, setActive] = useState(0);
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();

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
          <Text style={safeAreaStyle.header}>History</Text>
          <View>
            <Image source={require("../assets/images/bell-icon.png")} />
          </View>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 14 }}>
            Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor
            mauris condimentum.
          </Text>
        </View>
        <View style={safeAreaStyle.toggleContainer}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                style={[
                  safeAreaStyle.btnContainer,
                  { backgroundColor: active === index ? "#00C464" : "#FFFF" },
                ]}
                key={item.id}
                onPress={() => setActive(index)}
              >
                <Text
                  style={[
                    safeAreaStyle.btnText,
                    { color: active === index ? "#FFFF" : "#00C464" },
                  ]}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={safeAreaStyle.orderContainer}>
          <Text style={{ fontSize: 14, fontWeight: 200 }}>
            12th June 2018, 09:30 AM
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 800 }}>10 Quantity</Text>
            <Text style={{ fontSize: 14, color: "#FF5555" }}>
              Yet to pickup
            </Text>
          </View>
        </View>
        <View style={safeAreaStyle.orderContainer}>
          <Text style={{ fontSize: 14, fontWeight: 200 }}>
            12th June 2018, 09:30 AM
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 800 }}>10 Quantity</Text>
            <Text style={{ fontSize: 14, fontWeight: 200 }}>3rd Ironoing</Text>
          </View>
        </View>

        <View style={safeAreaStyle.orderContainer}>
          <Text style={{ fontSize: 14, fontWeight: 200 }}>
            12th June 2018, 09:30 AM
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 800 }}>10 Quantity</Text>
            <Text style={{ fontSize: 14, color: "#00C464", fontWeight: 200 }}>
              Completed
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <View style={{flexDirection:"row",gap:35}}>
              <Text style={{ fontSize: 16, fontWeight: 800 ,color:"#193628"}}>Total</Text>
              <Text style={{ fontSize: 16, fontWeight: 800 }}> ₹1000</Text>
            </View>
            <Text style={{ fontSize: 14, color: "#FF5555" }}>
              Pending Payment
            </Text>
          </View>

          

          
        </View>

        <View style={safeAreaStyle.orderContainer}>
          <View style={{position:"absolute", top:"50%",left:"40%"}}>
            <Image style={{width:100,height:100}} source={require('../assets/images/Paid.png')} />
          </View>
          <Text style={{ fontSize: 14, fontWeight: 200 }}>
            12th June 2018, 09:30 AM
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 800 }}>10 Quantity</Text>
            <Text style={{ fontSize: 14, color: "#00C464", fontWeight: 200 }}>
            Delivered
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <View style={{flexDirection:"row",gap:35}}>
              <Text style={{ fontSize: 16, fontWeight: 800 ,color:"#193628"}}>Total</Text>
              <Text style={{ fontSize: 16, fontWeight: 800 }}> ₹1000</Text>
            </View>
          </View>    
        </View>
        <View style={safeAreaStyle.orderContainer}>
          <View style={{position:"absolute", top:"50%",left:"40%"}}>
            <Image style={{width:100,height:100}} source={require('../assets/images/Paid.png')} />
          </View>
          <Text style={{ fontSize: 14, fontWeight: 200 }}>
            12th June 2018, 09:30 AM
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 800 }}>10 Quantity</Text>
            <Text style={{ fontSize: 14, color: "#00C464", fontWeight: 200 }}>
            Delivered
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <View style={{flexDirection:"row",gap:35}}>
              <Text style={{ fontSize: 16, fontWeight: 800 ,color:"#193628"}}>Total</Text>
              <Text style={{ fontSize: 16, fontWeight: 800 }}> ₹1000</Text>
            </View>
          </View>    
        </View>
      </ScrollView>
    </View>
  );
};

export default History;

const styles = (insets) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: "#FFFF",
    },
    container: {
      paddingTop: 25,
      paddingBottom:105,
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 30,
      fontWeight: "bold",
    },
    toggleContainer: {
      flexDirection: "row",
    },
    btnContainer: {
      flex: 1,
      borderWidth: 1,
      borderColor: "#00C464",
      padding: 10,
      marginBottom: 25,
    },
    btnText: {
      fontSize: 16,
      color: "#FFFF",
      textAlign: "center",
    },
    orderContainer: {
      marginVertical: 0,
      paddingTop: 15,
      marginBottom: 55,
    },
  });

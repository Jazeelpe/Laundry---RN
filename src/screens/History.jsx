import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
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

const orderData = [
  {
    id:1,
    date: " 12th June 2018, 09:30 AM",
    quantity: "6 Quantity",
    status: "Delivered",
    paymentStatus: "",
    amount: "1000",
    finalUpdate: "Done",
  },
  {
    id:2,
    date: " 12th June 2018, 09:30 AM",
    quantity: "10 Quantity",
    status: "Yet to pickup",
    paymentStatus: "",
    amount: "",
    finalUpdate: "",
  },
  {
    id:3,
    date: " 12th June 2018, 09:30 AM",
    quantity: "5 Quantity",
    status: "3rd Ironoing",
    paymentStatus: "",
    amount: "",
    finalUpdate: "inProgress",
  },
  {
    id:4,
    date: " 12th June 2018, 09:30 AM",
    quantity: "8 Quantity",
    status: "Completed",
    paymentStatus: "pending Payment",
    amount: "1000",
    finalUpdate: "inProgress",
  },
  {
    id:5,
    date: " 12th June 2018, 09:30 AM",
    quantity: "6 Quantity",
    status: "Delivered",
    paymentStatus: "",
    amount: "1000",
    finalUpdate: "Done",
  },
];

const History = () => {
  const [filterData, setFilterData] = useState(orderData);
  const [active, setActive] = useState(0);
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();

  const handlefilterData = (index) => {
    const newData = orderData.filter((item) => {
      if (index === 1) {
        return item.finalUpdate === "inProgress";
      }

      if (index === 2) {
        return item.finalUpdate === "Done";
      }
      if (index === 0) {
        return item;
      }
    });
    setFilterData(newData);
  };

  return (
    <View style={safeAreaStyle.mainContainer}>
      <View style={safeAreaStyle.container}>
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
                onPress={() => {
                  setActive(index);
                  handlefilterData(index);
                }}
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
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterData}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={safeAreaStyle.orderContainer} onPress={()=>{navigation.navigate('OrderStatus')}}>
                <View style={{ position: "absolute", top: "50%", left: "40%" }}>
                  {item.finalUpdate === "Done" ? (
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require("../assets/images/Paid.png")}
                    />
                  ) : null}
                </View>
                <Text style={{ fontSize: 14, fontWeight: 200 }}>
                  {item.date}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: 800 }}>
                    {item.quantity}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color:
                        item.status === "Delivered"
                          ? "#00C464"
                          : item.status === "Completed"
                          ? "#00C464"
                          : item.status === "Yet to pickup"
                          ? "#FF5555"
                          : "#000",
                      fontWeight: 200,
                    }}
                  >
                    {item.status}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <View style={{ flexDirection: "row", gap: 35 }}>
                      {item.amount !== "" ? (
                        <>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 800,
                              color: "#193628",
                            }}
                          >
                            Total
                          </Text>
                          <Text style={{ fontSize: 16, fontWeight: 800 }}>
                            ₹1000
                          </Text>
                        </>
                      ) : null}
                    </View>
                    <View>
                      {item.status !== "" ? (
                        <Text style={{ fontSize: 14, color: "#FF5555" }}>
                          {item.paymentStatus}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
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
      paddingBottom: 105,
      paddingHorizontal: 20,
      marginBottom: 100,
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
      marginBottom: 50,
    },
  });

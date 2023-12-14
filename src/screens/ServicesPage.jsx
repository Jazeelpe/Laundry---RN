import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    header: "Hand Wash",
    description:
      "Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.",
  },
  {
    id: 2,
    header: "Advantage",
    description:
      "Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor. Mauris condimentum nibh, ut fermentum massa",
  },
  {
    id: 3,
    header: "Drawbacks",
    description:
      "Maecenas faucibus mollis interdum.Fusce dapibus, tellus ac cursus commodo, tortor. ",
  },
];

const ServicesPage = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const safeAreaStyle = styles(insets);

  return (
    <View style={safeAreaStyle.mainContainer}>
      <View style={safeAreaStyle.container}>
        <View style={safeAreaStyle.imageConatiner}>
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            source={require("../assets/images/home-1.png")}
          />
        </View>
        <TouchableOpacity
          style={{ position: "absolute", top: 15, left: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: 35, height: 30 }}
            source={require("../assets/images/back.png")}
          />
        </TouchableOpacity>
        {data.map(item=>{
            return(
                <View style={{marginVertical:20 ,paddingHorizontal:20}} key={item.id}>
                    <Text style={{ fontSize: 18, fontWeight: 600, marginVertical: 10 }}>{item.header}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 10 }}>{item.description}</Text>
                </View>

            )
        })}
      </View>
    </View>
  );
};

export default ServicesPage;

const styles = (insets) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    imageConatiner: {
      height: 300,
    },
    container: {},
  });

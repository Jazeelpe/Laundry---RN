import React from "react";
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

const Home = () => {
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
          <Text style={safeAreaStyle.header}>Our Services</Text>
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
        <TouchableOpacity
          style={safeAreaStyle.mainSection}
          onPress={() => navigation.navigate("ServicePage")}
        >
          <View style={safeAreaStyle.imageConatiner}>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              source={require("../assets/images/home-1.png")}
            />
          </View>
          <Text style={{ fontSize: 18, fontWeight: 600, marginVertical: 10 }}>
            Hand Wash
          </Text>
          <Text style={{ fontSize: 14, marginBottom: 20 }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Nullam quis risus eget urna mollis ornare vel eu leo.
          </Text>
        </TouchableOpacity>
        <View style={safeAreaStyle.imageConatiner}>
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            source={require("../assets/images/home-2.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

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
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 30,
      fontWeight: "bold",
    },
    imageConatiner: {
      height: 240,
    },
  });

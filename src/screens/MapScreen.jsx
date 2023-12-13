import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../components/CustomTextInput";
const MapScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => navigation.goBack()}
          >
            <Image source={require("../assets/images/back.png")} />
          </TouchableOpacity>
        );
      },
      headerShown: true,
      title: "Choose location",
    });
  }, []);

  return (
    <View style={styles.maincontainer}>
      <View style={styles.searchContainer}>
        <CustomTextInput placeholder="Choose Location" type="map" />
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation = {true}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    padding: 20,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

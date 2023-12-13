import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { onboardingData } from "../../assets/utils/onboardingData";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import OnboradingFooter from "../../components/OnboradingFooter";

const OnboardingScreen = () => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  const handlePageChange = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / width);
    setActiveIndex(index);
  };
  const handlenavigation = ()=>{
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <FlatList
        onScroll={handlePageChange}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={onboardingData}
        renderItem={({ item, index }) => {
          return (
            <View
              style={[
                styles.flatlistcontainer,
                { backgroundColor: activeIndex === 1 ? "#00C464" : "#fff" },
              ]}
            >
              <View style={{ flex: 1.5 }}>
                <Image
                  style={{ height: "100%", width: width, resizeMode: "cover" }}
                  source={require(`../../assets/images/slider-1-bg.png`)}
                />
                <View style={{ position: "absolute", top: "35%", left: "5%" }}>
                  <Text style={styles.heading}>{item.header}</Text>
                  <Text style={styles.subHeading}>{item.subHeader}</Text>
                </View>
                <View style={{ position: "absolute", bottom: -20, left: 25 }}>
                  <Image
                    style={{ zIndex: 1 }}
                    source={
                      activeIndex === 0
                        ? require("../../assets/images/Logo-green.png")
                        : require("../../assets/images/Logo-white.png")
                    }
                  />
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View
                  style={[
                    styles.textContainer,
                    { backgroundColor: activeIndex === 1 ? "#00C464" : "#fff" },
                  ]}
                >
                  <Text
                    style={[
                      styles.text,
                      { width: width - 30 },
                      { color: activeIndex === 0 ? "#000" : "#fff" },
                    ]}
                  >
                    {item.description}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View style={{ flex: 0.15 }}>
        <OnboradingFooter activeIndex={activeIndex} handlenavigation={handlenavigation} />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatlistcontainer: {
    flex: 0.85,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  heading: {
    fontSize: 30,
    lineHeight: 35,
    width: "45%",
    color: "#fff",
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    lineHeight: 21.82,
    color: "#fff",
    width: "65%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21.82,
    textAlign: "justify",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: "16%",
    paddingLeft: 15,
  },
  logo: {},
});

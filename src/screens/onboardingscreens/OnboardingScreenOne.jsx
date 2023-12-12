import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import OnboradingFooter from "../../components/OnboradingFooter";

const OnboardingScreenOne = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/slider-1-bg.png")}
        />
        <View style={{ position: "absolute", top: "35%", left: "8%" }}>
          <Text style={styles.heading}>We clean your clothes</Text>
          <Text style={styles.subHeading}>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestib
          </Text>
        </View>
        <View style={{ position: "absolute", bottom: -20, left: 25 }}>
          <Image source={require("../../assets/images/Logo-green.png")} />
        </View>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas
            faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur blandit tempus porttitor. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <OnboradingFooter/>
      </View>
    </View>
  );
};

export default OnboardingScreenOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subcontainer: {
    flex: 1,
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
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: "16%",
    paddingHorizontal: 10,
  },
  logo: {},
});

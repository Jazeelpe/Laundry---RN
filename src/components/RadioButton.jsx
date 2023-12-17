import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  type,
} from "react-native";
import React from "react";

const RadioButton = ({
  place,
  address,
  radioId,
  selectedRadio,
  handleRadio,
  type,
}) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handleRadio(radioId)}
      >
        {selectedRadio === radioId && <View style={styles.radioBackground} />}
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1, paddingHorizontal: 15 }}
        onPress={() => handleRadio(radioId)}
      >
        {type === "notification" ? null : (
          <Text style={{ marginBottom: 5 }}>{place}</Text>
        )}
        <Text style={{ fontWeight: "700" }}>{address}</Text>
      </TouchableOpacity>
      <View>
        {type === "payments" ? (
          <Image source={require("../assets/images/visa.png")} />
        ) : null}
      </View>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
  },
  radioButton: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: "#00C464",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  radioBackground: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "#00C464",
  },
});

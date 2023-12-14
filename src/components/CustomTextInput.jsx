import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomTextInput = ({ type, placeholder, handleFocus }) => {
  return (
    <View>
      <TextInput
        style={[
          styles.input,
          { height: type === "multiline" ? 200 : 60 },
          { textAlignVertical: type === "multiline" ? "top" : null },
          { backgroundColor: type === "map" ? "#F4F4F4" : "#F4F4F4" },
        ]}
        placeholder={placeholder}
        secureTextEntry={type === "password" ? true : false}
        inputMode={
          type === "phone"
            ? "numeric"
            : type === "bookingqty"
            ? "numeric"
            : null
        }
        multiline={type === "multiline" ? true : false}
        onFocus={handleFocus}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 20,
    backgroundColor: "#F4F4F4",
  },
});

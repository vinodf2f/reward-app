import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Input = ({ label, name, onChange, ...props }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChange(name, text)}
        name={name}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    color: "#ce9d3b",
    margin: 10,
    marginTop: 25,
  },
  textInput: {
    padding: 10,
    color: "#ce9d3b",
    borderColor: "#ce9d3b",
    borderWidth: StyleSheet.hairlineWidth,
  },
});

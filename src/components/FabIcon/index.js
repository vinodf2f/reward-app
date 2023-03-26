import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const FabIcon = ({ onPress, isClose }) => {
  return (
    <TouchableOpacity
      style={[styles.fab, isClose && styles.bgTransparent]}
      onPress={onPress}
    >
      <Text style={[styles.fabText, isClose && styles.closeIcon]}>+</Text>
    </TouchableOpacity>
  );
};

export default FabIcon;

const styles = StyleSheet.create({
  fab: {
    paddingHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 30,
  },
  bgTransparent: {
    backgroundColor: "transparent",
  },
  fabText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "300",
    textAlign: "center",
  },
  closeIcon: {
    transform: [{ rotate: "45deg" }],
  },
});

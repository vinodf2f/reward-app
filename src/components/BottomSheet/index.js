import { StyleSheet, Animated, KeyboardAvoidingView } from "react-native";
import React, { useEffect } from "react";

const BottomSheet = ({ children, containerStyle, height = 300, visible }) => {
  const sheetHeight = new Animated.Value(0);
  const toggleBottomSheet = () => {
    Animated.timing(sheetHeight, {
      toValue: visible ? height : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    toggleBottomSheet();
  }, [visible]);

  return (
    <Animated.View
      style={[styles.container, containerStyle, { height: sheetHeight }]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={130}
      >
        {visible ? children : null}
      </KeyboardAvoidingView>
    </Animated.View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

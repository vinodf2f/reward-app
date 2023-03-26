import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Input from "../Input";
import { INTIAL_REWARD_VALUES } from "../constants";

const RewardForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState(INTIAL_REWARD_VALUES);
  const handleChange = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const onGiveReward = () => {
    if (!!formValues.amount && !!formValues.to) {
      onSubmit(formValues);
      setFormValues(INTIAL_REWARD_VALUES);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Give Reward</Text>
      <Input name="to" onChange={handleChange} label="To" />
      <Input name="amount" onChange={handleChange} label="Amount" />
      <Input
        onChange={handleChange}
        name="message"
        numberOfLines={5}
        label="Message"
      />
      <TouchableOpacity style={styles.button} onPress={onGiveReward}>
        <Text style={styles.buttonText}>Give</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RewardForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
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
  button: {
    margin: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
  },
});

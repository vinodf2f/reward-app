import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const currency = "$";

const UserInfo = ({ data }) => {
  const { name, rewardsGiven, rewardsReceived, avatar } = data;
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatarImage} />

      <View>
        <Text style={styles.boldText}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text>
            Given{" "}
            <Text style={styles.boldText}>
              {currency}
              {rewardsGiven}
            </Text>{" "}
            /{" "}
          </Text>
          <Text>
            Received{" "}
            <Text style={styles.boldText}>
              {currency}
              {rewardsReceived}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingVertical: 35,
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  boldText: {
    fontWeight: "bold",
  },
});

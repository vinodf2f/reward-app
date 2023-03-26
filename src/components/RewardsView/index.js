import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const RewardsView = ({ data }) => {
  const renderItem = ({ item }) => {
    const { id, from, to, time, message } = item;
    const infotext = `${from.name} Rewarded by ${to.name}`;
    return (
      <View style={styles.rewardCard}>
        <Image style={styles.avatar} source={{ uri: from.avatar }} />
        <View>
          <Text style={styles.title}>{message}</Text>
          <Text style={styles.infoText}>{infotext}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RewardsView;

const styles = StyleSheet.create({
  rewardCard: {
    padding: 20,
    borderRadius: 5,
    marginTop: 5,
    flexDirection: "row",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
    marginRight: 15,
  },
  title: {
    fontWeight: "bold",
  },
  infoText: {
    color: "lightgray",
  },
});

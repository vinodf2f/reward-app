import { StyleSheet, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import RewardsView from "../RewardsView";
import { Header } from "./Header";
const TABS = {
  feed: "Feed",
  myRewards: "My Rewards",
};

const Home = ({ userInfo, rewards = [] }) => {
  const [currentTab, setCurrentTab] = useState(TABS.feed);

  const filteredRewards = useMemo(() => {
    if (currentTab === TABS.myRewards) {
      return rewards.filter((reward) => reward.to.id === userInfo.id);
    } else return rewards;
  }, [currentTab, rewards]);

  const onTabChange = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <View style={styles.container}>
      <Header tabs={TABS} currentTab={currentTab} onChange={onTabChange} />
      <RewardsView data={filteredRewards} />
    </View>
  );
};

export default Home;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
    flex: 1,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tab: {
    flex: 1,
    padding: 20,
  },
  activeTab: {
    backgroundColor: "lightgray",
  },
  tabText: {
    fontWeight: "700",
    textAlign: "center",
    color: "gray",
  },
  activeTabText: {
    color: "black",
  },
});

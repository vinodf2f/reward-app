import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./index";

export const Header = ({ tabs, currentTab, onChange }) => {
  return (
    <View style={styles.headerContainer}>
      {Object.keys(tabs).map((tab) => {
        const tabValue = tabs[tab];
        const isActive = tabValue === currentTab;
        return (
          <TouchableOpacity
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => onChange(tabValue)}
          >
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
              {tabValue}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

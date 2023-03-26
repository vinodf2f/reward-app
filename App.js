import { useMemo, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import BottomSheet from "./src/components/BottomSheet";
import { INTIAL_REWARDS, USER_INFO } from "./src/components/constants";
import FabIcon from "./src/components/FabIcon";
import Home from "./src/components/Home";
import RewardForm from "./src/components/RewardForm";
import UserInfo from "./src/components/UserInfo";
import { calculateRewardsByUser, prepareRewardObject } from "./src/utils";

const DeviceHeight = Dimensions.get("screen").height;

export default function App() {
  const [rewards, setRewards] = useState(INTIAL_REWARDS);
  const [showBottomSheet, setBottomSheet] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheet(!showBottomSheet);
  };

  const onGiveRewards = ({ to, amount, message }) => {
    const newReward = prepareRewardObject({ amount, message, to, USER_INFO });
    setRewards([...rewards, newReward]);
    setBottomSheet(false);
  };

  const _userInfo = useMemo(() => {
    return {
      ...USER_INFO,
      ...calculateRewardsByUser(rewards, USER_INFO.id),
    };
  }, [rewards]);
  return (
    <View style={styles.container}>
      <UserInfo data={_userInfo} />
      <Home userInfo={_userInfo} rewards={rewards} />

      <BottomSheet
        visible={showBottomSheet}
        containerStyle={styles.bottomSheetStyle}
        height={DeviceHeight}
      >
        <RewardForm onSubmit={onGiveRewards} />
      </BottomSheet>

      <View style={styles.giveReward}>
        <FabIcon onPress={toggleBottomSheet} isClose={showBottomSheet} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4eded",
  },
  giveReward: {
    position: "absolute",
    bottom: 5,
    right: 20,
  },
  bottomSheetStyle: {
    backgroundColor: "black",
  },
});

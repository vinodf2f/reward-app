export function calculateRewardsByUser(rewards, userId) {
  return rewards.reduce(
    (acc, reward) => {
      if (reward.from.id === userId) {
        acc = {
          ...acc,
          rewardsGiven: acc.rewardsGiven + reward.amount,
        };
      } else if (reward.to.id === userId) {
        acc = {
          ...acc,
          rewardsReceived: acc.rewardsReceived + reward.amount,
        };
      }
      return acc;
    },
    {
      rewardsGiven: 0,
      rewardsReceived: 0,
    }
  );
}

export const prepareRewardObject = ({ userInfo, to, amount, message }) => {
  return {
    id: new Date().getTime(),
    amount: Number(amount),
    from: userInfo,
    to: {
      id: new Date().getTime() + 1,
      name: to,
    },
    time: new Date(),
    message,
  };
};

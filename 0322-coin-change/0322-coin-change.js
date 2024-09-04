/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i <= amount; i++) {
    for (const coin of coins) {
      if (coin > i) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  const minCount = dp[amount];
  return minCount === Infinity ? -1 : minCount;
};

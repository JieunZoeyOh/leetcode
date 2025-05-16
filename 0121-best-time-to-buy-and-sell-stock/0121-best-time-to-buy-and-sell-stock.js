/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let profit = 0;
  let purchaseAmount = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentAmount = prices[i];
    if (purchaseAmount < currentAmount) {
      profit = Math.max(profit, currentAmount - purchaseAmount);
    } else {
      purchaseAmount = currentAmount;
    }
  }

  return profit;
};

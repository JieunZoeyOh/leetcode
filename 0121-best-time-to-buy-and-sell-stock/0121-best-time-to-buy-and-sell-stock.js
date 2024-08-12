/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let profit = 0;
  let minimum = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (minimum < prices[i]) {
      profit = Math.max(prices[i] - minimum, profit);
    } else {
      minimum = prices[i];
    }
  }

  return profit;
};

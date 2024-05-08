/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }

  return maxProfit;
}

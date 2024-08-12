/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let profit = 0;
  let minimum = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (minimum < prices[i]) {
      const temp = prices[i] - minimum;
      
      if (temp > profit) {
        profit = temp;
      }
    } else {
      minimum = prices[i];
    }
  }

  return profit;
};
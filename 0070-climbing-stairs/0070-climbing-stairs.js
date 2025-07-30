/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  if (n <= 2) return n;

  const ways = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    ways[i] = ways[i - 2] + ways[i - 1];
  }

  return ways[n];
};

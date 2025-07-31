/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  if (s.length === 1) return 1;

  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  let result = 0;
  let extra = 0;

  for (const count of map.values()) {
    if (count % 2 === 1) {
      result += count - 1;
      extra = 1;
    } else {
      result += count;
    }
  }

  return result + extra;
};

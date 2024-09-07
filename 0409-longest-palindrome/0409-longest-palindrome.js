/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  const chars = new Map();

  for (const char of s) {
    chars.set(char, (chars.get(char) ?? 0) + 1);
  }

  let count = 0;
  let hasOneChar = false;

  for (const char of chars.keys()) {
    const double = Math.floor(chars.get(char) / 2) * 2;
    if (!hasOneChar && chars.get(char) % 2) hasOneChar = true;
    count += double;
  }

  if (hasOneChar) count++;
  return count;
};

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  if (s.length === 1) return 1;

  const set = new Set();

  for (const char of s) {
    if (set.has(char)) {
      set.delete(char);
    } else {
      set.add(char);
    }
  }

  return s.length - set.size + (set.size > 0 ? 1 : 0);
};

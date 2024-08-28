/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const memory = new Map();
  let length = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const prevIndex = memory.get(char);

    memory.set(char, i);

    if (prevIndex === undefined) {
      length++;
      continue;
    }

    maxLength = Math.max(length, maxLength);

    for (const key of memory.keys()) {
      if (memory.get(key) < prevIndex) {
        memory.delete(key);
      }
    }

    length = i - prevIndex;
  }

  return Math.max(length, maxLength);
};
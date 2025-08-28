/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  const map = new Map();

  for (const char of t) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  let left = 0;
  let shortestLength = Infinity;
  let resultLeft = 0;
  let needed = map.size;

  for (let right = 0; right < s.length; right++) {
    const current = s[right];

    if (map.has(current)) {
      map.set(current, map.get(current) - 1);

      if (map.get(current) === 0) {
        needed--;
      }
    }

    while (needed === 0) {
      const currentLength = right - left + 1;

      if (currentLength < shortestLength) {
        shortestLength = currentLength;
        resultLeft = left;
      }

      const leftChar = s[left];

      if (map.has(leftChar)) {
        if (map.get(leftChar) === 0) {
          needed++;
        }

        map.set(leftChar, map.get(leftChar) + 1);
      }

      left++;
    }
  }

  return shortestLength === Infinity ? "" : s.slice(resultLeft, resultLeft + shortestLength);
};

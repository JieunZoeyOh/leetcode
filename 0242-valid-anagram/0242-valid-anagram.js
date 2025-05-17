/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sMap = countWord(s);
  const tMap = countWord(t);

  if (sMap.size !== tMap.size) return false;

  for (const [key, value] of sMap.entries()) {
    if (value !== tMap.get(key)) return false;
  }

  return true;
};

const countWord = (word) => {
  const map = new Map();
  for (const char of word) {
    const count = map.get(char);
    map.set(char, (count ?? 0) + 1);
  }
  return map;
}

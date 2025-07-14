/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const map = new Map();

  for (const word of magazine) {
    const count = map.get(word) || 0;
    map.set(word, count + 1);
  }

  for (const word of ransomNote) {
    const count = map.get(word);
    if (!count) return false;
    map.set(word, count - 1);
  }

  return true;
};

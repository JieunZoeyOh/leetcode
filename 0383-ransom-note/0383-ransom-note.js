/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  if (magazine.length < ransomNote.length) return false;

  const counter = new Map();
  for (const char of magazine) {
    counter.set(char, (counter.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    const count = counter.get(char);

    if (!count) return false;

    counter.set(char, count - 1);
  }

  return true;
};

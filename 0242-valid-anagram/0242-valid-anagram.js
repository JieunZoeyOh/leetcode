/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const counterS = new Map();
  const counterT = new Map();

  for (let i = 0; i < s.length; i++) {
    counterS.set(s[i], (counterS.get(s[i]) ?? 0) + 1);
    counterT.set(t[i], (counterT.get(t[i]) ?? 0) + 1);
  }

  if (counterS.size !== counterT.size) return false;

  for (const [char, count] of counterS) {
    if (counterT.get(char) !== count) {
      return false;
    }
  }

  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const getCharCounter = (s) => {
  const counter = new Map();

  for (const char of s) {
    const count = counter.get(char);
    counter.set(char, (count ?? 0) + 1)
  }

  return counter;
};

const isAnagram = (s, t) => {
  const counterS = getCharCounter(s);
  const counterT = getCharCounter(t);

  if (counterS.size !== counterT.size) return false;

  for (const [char, count] of counterS) {
    if (count !== counterT.get(char)) {
      return false;
    }
  }

  return true;
};


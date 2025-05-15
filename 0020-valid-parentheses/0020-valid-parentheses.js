const bracket = {
  "(": ")",
  "[": "]",
  "{": "}",
}

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const arr = [];

  for (const char of s) {
    if (char in bracket) {
      arr.push(char);
    } else {
      const last = arr.pop();
      if (bracket[last] === char) continue;
      return false;
    }
  }

  return arr.length === 0;
};

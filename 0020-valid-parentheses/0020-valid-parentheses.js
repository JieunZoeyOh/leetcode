/**
 * @param {string} s
 * @return {boolean}
 */
const bracketPairs = {
  "(": ")",
  "{": "}",
  "[": "]",
};

const isValid = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const openingBracket = bracketPairs[s[i]];

    if (openingBracket) {
      stack.push(openingBracket);
    } else {
      const closedBracket = stack.pop();

      if (closedBracket !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

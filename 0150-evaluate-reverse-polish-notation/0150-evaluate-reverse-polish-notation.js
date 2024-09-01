const operators = {
  "+": (a, b) => Number(a) + Number(b),
  "-": (a, b) => Number(a) - Number(b),
  "*": (a, b) => Number(a) * Number(b),
  "/": (a, b) => Math.trunc(Number(a) / Number(b)),
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  let pointer = 0;
  const tokenList = [...tokens];

  while(tokenList.length > 1) {
    if (operators[tokenList[pointer]]) {
      const result = operators[tokenList[pointer]](tokenList[pointer - 2], tokenList[pointer - 1]);
      tokenList.splice(pointer - 2, 3, result);
      pointer--;
    } else {
      pointer++;
    }
  }

  return tokenList[0];
};

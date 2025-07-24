const truncateTowardZero = (result) =>
  result < 0 ? Math.ceil(result) : Math.floor(result);

const operators = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => truncateTowardZero(x / y),
};

const calculate = (operator, x, y) => {
  const operation = operators[operator];
  if (!operation) throw new Error(`Invalid operator: ${operator}`);
  return operation(x, y);
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  const stack = [];

  for (const token of tokens) {
    if (isNaN(token)) {
      const [x, y] = stack.splice(stack.length - 2);
      const result = calculate(token, x, y);
      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
};

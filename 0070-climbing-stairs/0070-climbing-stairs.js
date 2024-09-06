/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  const maxTwoStep = Math.floor(n / 2);
  let totalWays = 1;

  if (maxTwoStep === 0) return totalWays;

  for (let twoStepCount = 1; twoStepCount <= maxTwoStep; twoStepCount++) {
    const totalDigits = twoStepCount + (n - twoStepCount * 2);
    totalWays += combination(totalDigits, twoStepCount);
  }

  return totalWays;
}

function combination(a, b) {
  return factorial(a) / (factorial(b) * factorial(a - b));
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

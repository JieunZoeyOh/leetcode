/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  const result = [[...newInterval]];
  const intervalArr = [...intervals];

  while (intervalArr.length > 0) {
    const [is, ie] = intervalArr.shift();
    const [ts, te] = result.pop();

    if (ie < ts) {
      result.push([is, ie]);
      result.push([ts, te]);
    } else if (te < is) {
      result.push([ts, te]);
      result.push([is, ie]);
      break;
    } else {
      result.push([Math.min(is, ts), Math.max(ie, te)]);
    }
  }

  return [...result, ...intervalArr];
};

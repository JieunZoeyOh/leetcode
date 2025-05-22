/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  const listSize = intervals.length;
  const result = [];
  let i = 0;
  
  while (i < listSize && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  while(i < listSize && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }

  result.push(newInterval);

  while (i < listSize) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

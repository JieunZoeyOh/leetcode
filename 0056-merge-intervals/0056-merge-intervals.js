/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  intervals.sort(([s1], [s2]) => s1 - s2);
  let [start, end] = intervals[0];
  const result = [];

  for (let i = 1; i < intervals.length; i++) {
    const [nextStart, nextEnd] = intervals[i];

    if (end < nextStart) {
      result.push([start, end]);
      start = nextStart;
      end = nextEnd;
    } else {
      start = Math.min(start, nextStart);
      end = Math.max(end, nextEnd);
    }
  }

  result.push([start, end]);

  return result;
};

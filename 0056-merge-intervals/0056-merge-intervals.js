/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  if (intervals.length === 1) return intervals;

  intervals.sort(([s1], [s2]) => s1 - s2);
  
  const result = [];
  const acc = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (acc[1] < start) {
      result.push([...acc]);
      acc[0] = start;
      acc[1] = end;
    } else {
      acc[1] = Math.max(acc[1], end);
    }
  }

  result.push([...acc]);
  return result;
};

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = (points, k) => {
  points.sort(([x1, y1], [x2, y2]) => (x1 ** 2 + y1 ** 2) - (x2 ** 2 + y2 ** 2));

  return points.slice(0, k);
};

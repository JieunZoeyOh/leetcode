/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = (points, k) => {
  const distances = points.map(([x, y]) => ({
    point: [x, y],
    distance: x ** 2 + y ** 2,
  }));

  distances.sort((a, b) => a.distance - b.distance);

  return distances.slice(0, k).map((item) => item.point);
};

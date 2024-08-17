/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
  const row = image.length;
  const column = image[0].length;
  const startPixelColor = image[sr][sc];

  const visitedList = Array.from({ length: row }, () => new Array(column).fill(false));
  const stack = [[sr, sc]];

  while (stack.length > 0) {
    const [x, y] = stack.pop();

    if (visitedList[x][y]) continue;
    visitedList[x][y] = true;

    if (image[x][y] !== startPixelColor) continue;
    image[x][y] = color;

    if (x - 1 >= 0) stack.push([x - 1, y]);
    if (y + 1 < column) stack.push([x, y + 1]);
    if (y - 1 >= 0) stack.push([x, y - 1]);
    if (x + 1 < row) stack.push([x + 1, y]);
  }

  return image;
};

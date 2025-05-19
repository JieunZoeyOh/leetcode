/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
  const originalColor = image[sr][sc];
  const queue = [[sr, sc]];
  const rowLength = image.length;
  const columnLength = image[0].length;

  while (queue.length) {
    const [row, column] = queue.shift();

    if (image[row][column] === color) continue;

    image[row][column] = color;

    if (row - 1 >= 0 && image[row - 1][column] === originalColor) {
      queue.push([row - 1, column]);
    }

    if (row + 1 < rowLength && image[row + 1][column] === originalColor) {
      queue.push([row + 1, column]);
    }

    if (column - 1 >= 0 && image[row][column - 1] === originalColor) {
      queue.push([row, column - 1]);
    }

    if (column + 1 < columnLength && image[row][column + 1] === originalColor) {
      queue.push([row, column + 1]);
    }
  }

  return image;
};

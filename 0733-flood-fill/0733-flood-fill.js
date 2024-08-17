/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
    const originalColor = image[sr][sc];

    if (originalColor === color) return image;

    const fillPixel = (row, col) => {
        if (row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !== originalColor) {
            return;
        }

        image[row][col] = color;

        fillPixel(row - 1, col);
        fillPixel(row + 1, col);
        fillPixel(row, col - 1);
        fillPixel(row, col + 1);
    };

    fillPixel(sr, sc);

    return image;
};

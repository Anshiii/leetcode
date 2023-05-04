/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  if (!image[0]) return [];
  let initVal = image[sr][sc];
  let col = image.length,
    row = image[0].length;
  let visited = [[]];
  function action(sr, sc) {
    if (sr < 0 || sr >= col) return;
    if (sc < 0 || sc >= row) return;
    if (visited[sr] && visited[sr][sc] === 1) return;
    visited[sr] = visited[sr] || [];
    visited[sr][sc] = 1;
    if (image[sr][sc] === initVal) {
      image[sr][sc] = color;
      action(sr - 1, sc);
      action(sr, sc - 1);
      action(sr + 1, sc);
      action(sr, sc + 1);
    }
  }

  action(sr, sc);
  return image;
};

//输入: image = [[1,1,1],[1,1,0],[1,0,1]]，sr = 1, sc = 1, newColor = 2

floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);

/* 

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length;
  if (!m) return [];
  let n = matrix[0].length,
    count = 1,
    result = [],
    i = 0,
    j = 0;
  if (!m || !n) return result;

  let ms = 0,
    me = m - 1,
    ns = 0,
    ne = n - 1;
  while (result.length < m * n) {
    let mod = count % 4; // 0 1 2 3

    switch (mod) {
      case 0:
        for (i = me; i >= ms; i--) {
          result.push(matrix[i][j]);
        }
        i++;
        ns++;
        count++;
        continue;
      case 1:
        for (j = ns; j <= ne; j++) {
          result.push(matrix[i][j]);
        }
        j--;
        ms++;
        count++;

        continue;
      case 2:
        for (i = ms; i <= me; i++) {
          result.push(matrix[i][j]);
        }
        i--;
        ne--;
        count++;
        continue;
      case 3:
        for (j = ne; j >= ns; j--) {
          result.push(matrix[i][j]);
        }
        j++;
        me--;

        count++;

        continue;
    }
  }
  return result;
};

console.log(spiralOrder([[]]));
console.log(spiralOrder([]));
console.log(spiralOrder([[1]]));
console.log(spiralOrder([[12, 3, 4]]));
console.log(spiralOrder([[1], [2], [3]]));
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

/* 
在一个 n * m 的二维数组中，
每一行都按照从左到右递增的顺序排序，
每一列都按照从上到下递增的顺序排序。
请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

 

示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/* 二分 n*2分 */
var findNumberIn2DArray2 = function (matrix, target) {
  let n = matrix.length;
  if (n < 1) return false;
  let m = matrix[0].length;
  if (m < 1) return false;

  // 二分查找符合条件的 nx ，然后每个 n 二分查找？

  let nL = 0,
    nR = n - 1;
  while (nL < nR) {
    let mid = nL + Math.floor((nR - nL) / 2);
    if (matrix[mid][0] > target) {
      nR = mid - 1;
    } else if (matrix[mid][0] < target) {
      nL = mid + 1; // 偏大
    } else {
      return true;
    }
  }

  console.log(nL, nR); // 所以二者应该相等，值为符合的行

  function find(col) {
    let left = 0,
      right = m - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (matrix[col][mid] > target) {
        right = mid - 1;
      } else if (matrix[col][mid] < target) {
        left = mid + 1;
      } else {
        return true;
      }
    }
  }

  for (let i = 0; i <= nR; i++) {
    if (find(i)) {
      return true;
    }
  }
  return false;
};


/* m+n 查找 */
var findNumberIn2DArray = function (matrix, target) {
  // 右上角的元素 a，有 左<a , 下 > a
  // 左下角的元素a 有 上<a , 右 >a

  /* n行 m 列 */
  let n = matrix.length;
  if (n < 1) return false;
  let m = matrix[0].length;
  if (m < 1) return false;

  let i = n - 1,
    j = 0;
  while (i >= 0 && j <= m - 1) {
    let leftBottom = matrix[i][j];
    if (leftBottom > target) {
      i--;
      continue;
    } else if (leftBottom < target) {
      j++;
    } else {
      return true;
    }
  }
  return false;
};

let p = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

console.log(findNumberIn2DArray(p, 5));
console.log(findNumberIn2DArray(p, 12));
console.log(findNumberIn2DArray(p, 0));
console.log(findNumberIn2DArray(p, 20));

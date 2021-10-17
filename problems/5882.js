/* 网格游戏 */

/* 

两排， 0 ~ n  。 假设在第一排下标为 k 的位置 向下，则路径和为  preSum1 0-k, preSum2 k-n,且 k 要使得 第二个的机器人路径和最小。
 第二个机器人的路径和为  preSum1 k+1 -- n 和 preSum2 0-k-1 中的大值。

 那我遍历每个k，取最小值的那个 k 吧
 
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  let preSum1 = [],
    preSum2 = [];
  let m = grid.length; //2
  let n = grid[0].length;

  for (let i = 0; i < m; i++) {
    const column = grid[i];
    let preSum = i ? preSum2 : preSum1;
    for (let j = 0; j < n; j++) {
      const cur = column[j];
      preSum[j] = j ? preSum[j - 1] + cur : cur;
    }
  }

  // 这里是 [l,r]
  function calPreSum(l, r, array) {
    if (l === 0) return array[r];
    return array[r] - array[l - 1];
  }

  let min = Infinity;
  for (let i = 0; i < n; i++) {
    let tem1 = calPreSum(i + 1, n - 1, preSum1),
      tem2 = i ? calPreSum(0, i - 1, preSum2) : 0;
    let second = Math.max(tem2, tem1);
    if (second < min) {
      min = second;
    }
  }

  console.log(min);
  return min;
};

gridGame([
  [1, 3, 1, 15],
  [1, 3, 3, 1],
]); //7
gridGame([[3,3,1],[8,5,2]]); //4
gridGame([[2,5,4],[1,5,1]]); //4

/**
 * @param {number[][]} grid
 * @return {number}
 */

/* 

dp[i][j] = Max(dp[i-1][j], dp[i][j-1]) + dp[i][j]

*/
var maxValue = function (grid) {
  let m = grid.length,
    n = grid[0].length,
    dp = [grid[0][0]];

  for (let j = 1; j < m; j++) {
    dp[j] = [grid[j][0] + grid[j - 1][0]];
  }

  for (let j = 1; j < m; j++) {
    dp[j].push([grid[0][j] + grid[0][j - 1]]);
  }

  let i, j;

  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      let max = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      dp[i].push([max]);
    }
  }

  return dp[m - 1][n - 1];
};

let aa = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(maxValue(aa));

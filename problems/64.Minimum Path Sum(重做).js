/**
 * Created by Anshi on 2018/8/23.
 */
/*
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

 说明：每次只能向下或者向右移动一步。

 示例:

 输入:
 [
 [1,3,1],
 [1,5,1],
 [4,2,1]
 ]
 输出: 7
 解释: 因为路径 1→3→1→1→1 的总和最小。
 */

/* tag 动态规划  */
/**
 * @param {number[][]} grid
 * @return {number}
 */

/*先找出 唯一路径(起点的横竖方向)的值？然后找中间最小路径的值。*/
var minPathSum = function (grid) {
  if (grid[0][0].length === 0) {
	return 0;
  }
  let m = grid.length;
  let n = grid[0].length;

  let pathArray = [[]];
  pathArray[0][0] = grid[0][0];

  for (let j = 1; j < n; j++) {
	pathArray[0][j] = pathArray[0][j - 1] + grid[0][j]
  }

  for (let i = 1; i < m; i++) {
	pathArray[i] = [];
	pathArray[i][0] = pathArray[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < m; i++) {
	for (j = 1; j < n; j++) {
	  let top = pathArray[i - 1][j];
	  let left = pathArray[i][j - 1];
	  pathArray[i][j] = Math.min(top, left) + grid[i][j];
	}
  }
  return pathArray[m - 1][n - 1]
};

minPathSum([
  [1, 3, 1, 1],
  [1, 5, 1, 2],
  [4, 2, 1, 5]
])
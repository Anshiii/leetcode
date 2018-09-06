/**
 * Created by Anshi on 2018/9/4.
 */

/*
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

 问总共有多少条不同的路径？*/

/*和64差不多，做练习用  动态规划*/


/*还可以用 滚动数组法？？？。  64比这个复杂点*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

  if (m === 0 || n === 0) {
	return 0;
  }
  let dp = [new Array(n).fill(1)];

  for (let j = 1; j < m; j++) {
	dp[j] = [];
	dp[j][0] = 1;
  }

  for (let i = 1; i < m; i++) {
	for (let j = 1; j < n; j++) {
	  dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
	}
  }
  return dp[m - 1][n - 1];
};

uniquePaths(3, 2)
uniquePaths(3, 7)
uniquePaths(0, 0)
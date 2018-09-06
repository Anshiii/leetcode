/**
 * Created by Anshi on 2018/9/4.
 */
/*
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 */


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0].length === 0 || obstacleGrid[0][0] === 1) {
	return 0;
  }

  let dp = [[]];
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  if (obstacleGrid[m - 1][n - 1] === 1) {
	return 0
  }

  dp[0][0] = 1;

  for (let i = 1; i < m; i++) {
	if (obstacleGrid[i][0] === 1) {
	  dp[i] = [0];
	} else {
	  dp[i] = [dp[i - 1][0]];
	}
  }

  for (let j = 1; j < n; j++) {
	if (obstacleGrid[0][j] === 1) {
	  dp[0][j] = 0
	} else {
	  dp[0][j] = dp[0][j - 1]
	}
  }

  for (let i = 1; i < m; i++) {
	for (let j = 1; j < n; j++) {
	  if (obstacleGrid[i][j] === 1) {
		dp[i][j] = 0;
		continue;
	  }
	  dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
	}
  }
  console.log(dp[m - 1][n - 1])
  return dp[m - 1][n - 1]
};


uniquePathsWithObstacles([[0, 0], [1, 1], [0, 0]])
uniquePathsWithObstacles([[0, 0], [1, 0]])
uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 1],
  [0, 0, 0]
])
uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])

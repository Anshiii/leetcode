/* 剑指 Offer II 091. 粉刷房子 */

/* 
 针对 第 k 号房子，他取的颜色是 Min(除 k-1 号颜色房子的成本的最小值)
 针对 给 第 K 号房子刷 0号色， 前置的结果是 min（k-1用1号，k-1 用2号）
 设  f(x,y) 表示 第x号房子刷y号色时的最小成本

*/
/**
 * @param {number[][]} costs
 * @return {number}
 */

var minCost = function (costs) {
  const dp = [costs[0]],
    len = costs.length;

  function others(idx) {
    let base = {
      0: [1, 2],
      1: [0, 2],
      2: [0, 1],
    };
    return base[idx];
  }

  for (let i = 1; i < len; i++) {
    dp[i] = [];
    for (let j = 0; j < 3; j++) {
      const [c1, c2] = others(j);
      dp[i][j] = Math.min(dp[i - 1][c1], dp[i - 1][c2]) + costs[i][j];
    }
  }

  return Math.min(...dp[len - 1]);
};

console.log(
  minCost([
    [17, 2, 17],
    [16, 16, 5],
    [14, 3, 19],
  ])
);
console.log(minCost([[7, 6, 2]]));

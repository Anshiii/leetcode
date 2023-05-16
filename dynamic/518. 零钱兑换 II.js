/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

/**
 *
 * 数量无限... 不是 01 背包；
 *
 * dp[i][j] 表示前 i 个数取若干可以组合成 j 的可能性数量，
 * 针对第 i 个数 n 可以划分为
 * 1. n > j 则 dp[i][j] = dp[i-1][j]
 * 2. n <=j 则 dp[i][j] = dp[i-1][j] + dp[i-1][j-n] + dp[i-1][j-2n] + .... (j-2n >0)
 *
 *
 * length 300 , amount <5000
 *
 * 以 5, [1, 2, 5] 为例
 *           0,1,2,3,4,5
 * i=0 ---- [1,0,0,0,0,0]
 * i=1 ---- [1,1,1,1,1,1]
 * i=2 ---- [1,1,2,2,3,3]
 * i=3 ---- [1,1,2,2,3,4]
 */
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1; // 前0个数凑成0的可能性为 1

  for (let i = 0; i < coins.length; i++) {
    let cur = coins[i];
    for (let j = amount; j >= 0; j--) {
      if (j < cur) continue;
      let x = j - cur;
      while (x >= 0) {
        dp[j] += dp[x];
        x = x - cur;
      }
    }
  }
  const ret = dp[amount];
  console.log("---anshi---ret", ret);
  return ret;
};

change(5, [1, 2, 5]);
change(3, [2]);
change(10, [10]);

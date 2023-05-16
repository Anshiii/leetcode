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
 * 
 * 2. 另外一种累加，遍历 
 */
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1; // 前0个数凑成0的可能性为 1

  for (let i = 0; i < coins.length; i++) {
    let cur = coins[i];
    // 只有数量大于 cur 的值需要刷新，小于的可以直接沿用旧值 
    for (let j = cur; j <= amount; j++) {
        dp[j] += dp[j - cur]; // 为什么只考虑用一个硬币的情况？ => 这里不是只考虑一个，可能在之前就已经用了  coin ，这里是最后一个是 coin2 但是之前可能已经是用 coin 结尾的组合。
    }
  }
  const ret = dp[amount];
  console.log("---anshi---ret", ret);
  return ret;
};

change(5, [1, 2, 5]);
change(3, [2]);
change(10, [10]);

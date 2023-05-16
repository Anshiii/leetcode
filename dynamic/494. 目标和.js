/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * 选取所有 nums 中的数相加或相减，使得结果为 target，求有多少种情况
 * {1，2,3} => {-1,1} => {-3,-1,1,3}=>{-6,-4,-2,0,0,2,4,6} 2^n
 * 1. 排列组合 计算出所有的可能性
 *
 * 2. 背包问题转化 => 一半
 *
 * 计算 nums 的元素和 sum,如果添加负号的元素和为 n1，添加正号的元素和为 sum-n1
 * 若需要满足 sum - n1 - n1 = target =>  n1 = (sum - target)/2
 * 则求出 负号元素和为 n1 的，有多少种可能即可。 
 * 
 * 
 *{1，2,3} =>  sum = 6 target = 0 n1 = 3
 {0,1} => {0,1,2,3} => {0,1,2,3,3,4,5,6}
 *
 * 3. 定义二维数组dp,其中 dp[i][j]表示在前 i 个数中取若干元素使得和为 j.
 * 数组中第 i 个数为 n;
 * 则 dp[i][j] 的值 1. 不可能加 n ,即 j < n，则 此时结果为 dp[i-1][j] (只能不加 n)
 *                 2. j>=n，则 dp[i-1][j] (不加 n) + dp[i-1][j-n] (加上 n)
 * 总结 dp[i][j] = {j<n} dp[i-1][j]   ; {j>=n} dp[i-1][j] + dp[i-1][j-n]
 *
 * 以 [1,2,3] 距离
 * dp[0][0]=1 dp[0][j(j>0)]=0
 * dp[1][0]=1 dp[0][]
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((acc, cur) => acc + cur);
  const n1 = (sum - target) / 2;
  // 不存在
  if (!Number.isInteger(n1) || n1 < 0) return 0;

  let dp = new Array(n1 + 1).fill(0);
  dp[0] = 1; // 前 0 个数中取若干数，和为0的可能有1个。
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    for (let j = n1; j >= 0; j--) {
      if (j < cur) continue;
      dp[j] = dp[j] + dp[j - cur];
    }
  }

  const result = dp[n1];
  return result;
};

/**

 */

findTargetSumWays(
  [
    2, 107, 109, 113, 127, 131, 137, 3, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 47,
    53,
  ],
  1000
);
findTargetSumWays([0], 0); //2
findTargetSumWays([1, 0], 2); //2

findTargetSumWays([1, 2, 3], 0); // 2
findTargetSumWays([1, 2, 1, 0, 5, 7, 3, 2, 8, 1, 1, 1, 1, 1], 10); // 772
findTargetSumWays([1, 1, 1, 1, 1], 3); //5

/**
 * [1,0] 1  => 2 种  1+0 ， 1-0
 * [0] 0  => 2 种  +0 ， -0
 */

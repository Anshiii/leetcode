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
 *
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((acc, cur) => acc + cur);
  const n1 = (sum - target) / 2;
  // 不存在
  if (!Number.isInteger(n1)) return 0;

  let dp = [0, nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    let length = dp.length;
    for (let j = 0; j < length; j++) {
      let tem = dp[j] + cur;
      if (tem > n1) continue;
      dp.push(tem);
    }
  }
  const result = dp.reduce((acc, cur) => {
    if (cur === n1) {
      acc++;
    }
    return acc;
  }, 0);

  return result;
};

findTargetSumWays([0], 0); //2

findTargetSumWays([1, 2, 3], 0); // 2
findTargetSumWays([1, 2, 1, 0, 5, 7, 3, 2, 8, 1, 1, 1, 1, 1], 10); // 772
findTargetSumWays([1, 1, 1, 1, 1], 3); //5
findTargetSumWays([1, 0], 2); //2

/**
 * [1,0] 1  => 2 种  1+0 ， 1-0
 * [0] 0  => 2 种  +0 ， -0
 */

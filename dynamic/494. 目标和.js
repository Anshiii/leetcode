/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * 选取所有 nums 中的数相加或相减，使得结果为 target，求有多少种情况
 * {1，2,3} => {-1,1} => {-3,-1,1,3}=>{-6,-4,-2,0,0,2,4,6} 2^n
 *
 */
var findTargetSumWays = function (nums, target) {
  let dp = [-nums[0], +nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    let length = dp.length;
    // + cur
    for (let j = 0; j < length; j++) {
      dp.push(dp[j] + cur);
    }
    // - cur
    for (let j = 0; j < length; j++) {
      dp[j] = dp[j] - cur;
    }
  }
  const result = dp.reduce((acc, cur) => {
    if (cur === target) {
      acc++;
    }
    return acc;
  }, 0);

  return result;
};

findTargetSumWays([1,2,1,0,5,7,3,2,8,1,1,1,1,1], 10); // 2
findTargetSumWays([1, 2, 3], 0); // 2
findTargetSumWays([1, 1, 1, 1, 1], 3); //5
findTargetSumWays([1, 0], 2); //2 
findTargetSumWays([0], 0); //2

/**
 * [1,0] 1  => 2 种  1+0 ， 1-0
 * [0] 0  => 2 种  +0 ， -0
 */

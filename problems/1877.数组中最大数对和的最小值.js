/*
 * @lc app=leetcode.cn id=1877 lang=javascript
 *
 * [1877] 数组中最大数对和的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  // 排序，两端组队
  nums.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < nums.length / 2; i++) {
    max = Math.max(max, nums[i] + nums[nums.length - i - 1]);
  }
  return max;
};
// @lc code=end
console.log(minPairSum([3,5,4,2,4,6]))

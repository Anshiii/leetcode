/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    len = nums.length,
    current = 0;

  while (len >= 0) {
    len--;
    if (nums[len] === 1) {
      current++;
    } else {
      max = Math.max(current, max);
      current = 0;
    }
  }
  return max
};
// @lc code=end

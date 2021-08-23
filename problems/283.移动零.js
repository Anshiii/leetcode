/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  /* 对我来说的重点是怎么才能少操作次数 */
  let count = 0,
    len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      count++;
      continue;
    }
    nums[i - count] = nums[i];
  }
  while (count) {
    nums[len - count] = 0;
    count--;
  }
  return nums;

};
// @lc code=end
moveZeroes([0, 1, 0, 3, 12]);

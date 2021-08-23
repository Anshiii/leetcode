/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let len = nums.length,
    count = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      count++;
      continue;
    }
    nums[i - count] = nums[i];
  }
  return len - count;
};
// @lc code=end

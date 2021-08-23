/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // k为 size 的窗口内存在重复元素即可
  const window = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i])) return true;
    window.add(nums[i]);
    if (window.size > k) {
      window.delete(nums[i - k]);
    }
  }
  return false;
};
// @lc code=end

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

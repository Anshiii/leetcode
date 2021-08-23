/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0,
    right = k,
    len = nums.length,
    result=0,
    zeroCount = 0;
    
    
    while(right<len){
      const cur = nums[right]

      // K用完的结果，万一 k 没用完呢...
      while()

    }
};
// @lc code=end

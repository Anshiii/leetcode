/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // <0 ,a 在 b 前面
  var sortNums = nums.sort((a, b) => a - b);
  var result = [],
    len = nums.length;
  function find(nums, start, k, n, before) {
    let last = null;
    if (n === 1) {
      for (let i = start; i < len; i++) {
        const k2 = nums[i];
        if (last === k2) continue;
        if (k2 === k) {
          result.push([...before, k2]);
          last = k2;
        }
      }
    } else {
      for (let i = start; i < len; i++) {
        let k1 = nums[i];
        if (k1 === last) {
          continue;
        }
        const current = [...before, k1];
        find(nums, i + 1, k - k1, n - 1, current);
        last = k1;
      }
    }
  }

  find(sortNums, 0, target, 4, []);
  console.log(result);
  return result;
};

fourSum([-2, -1, -1, 1, 1, 2, 2], 0);
// @lc code=end

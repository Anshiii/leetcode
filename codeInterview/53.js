/* 
统计一个数字在排序数组中出现的次数。

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2

【目标不一定在所给的数组中】
输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // find  排序数组 二分查找
  // count 前后查找

  let result = 0,
    len = nums.length;

  /* 二分查找的 left 和 right 初始值？ */
  let left = 0,
    right = len - 1;

  /* 二分查找的 left 和 right 循环判断是 < 还是 <= */
  while (left <= right) {
    let mid = Math.floor(left + (right - left) * 0.5);
    if (nums[mid] > target) {
      /* 二分查找的 取边界的时候直接用 mid ，还是 mid +1 */
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      // COUNT
      result = 1;
      for (let i = mid - 1; i >= 0; i--) {
        if (nums[i] === target) {
          result++;
        } else {
          break;
        }
      }
      for (let i = mid + 1; i < len; i++) {
        if (nums[i] === target) {
          result++;
        } else {
          break;
        }
      }
      return result;
    }
  }
  return result;
};

console.log(search([1], 1));
console.log(search([1, 2], 1));
console.log(search([5, 7, 7, 8, 8, 10], 8));
console.log(search([5, 7, 7, 8, 8, 10], 6));
console.log(search([7, 7, 7, 7], 7));

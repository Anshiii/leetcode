/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let len = nums.length,
    left = 0,
    right = 0,
    result;
  for (let i = 1; i < len; i++) {
    let last = nums[i - 1],
      cur = nums[i];
    if (cur < last) {
      left = i - 1;
      break;
    }
  }
  let leftVal = nums[left];
  for (let i = len - 1; i > left; i--) {
    let last = nums[i - 1],
      cur = nums[i];
    if (cur < last || cur < leftVal) {
      right = i;
      break;
    }
  }
  // 还要找出 left 和 right 之间的最小数。
  let min = 1000000,
    max = -1000000;
  for (let i = left; i <= right; i++) {
    min = Math.min(nums[i], min);
    max = Math.max(nums[i], max);
  }

  let tem = left;
  for (let i = 0; i < tem; i++) {
    if (nums[i] > min) {
      left = i;
      break;
    }
  }

  for (let i = len - 1; i > right; i--) {
    if (nums[i] < max) {
      right = i;
      break;
    }
  }

  if (left === right) {
    result = 0;
  } else if (left > right) {
    result = len;
  } else {
    result = right - left + 1;
  }
  console.log("---", result, "---", left, right);
  return result;
};
// @lc code=end
findUnsortedSubarray([2, 1, 5, 3, 4]); //5
findUnsortedSubarray([1, 3, 2, 4, 5]); //2
findUnsortedSubarray([2, 1]); //2
findUnsortedSubarray([1, 3, 5, 7, 4, 3, 2, 8, 9, 1]); //9

findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]); //5
findUnsortedSubarray([1, 2, 3, 4]); //0
findUnsortedSubarray([1]); //0

/* 
硬解法...
left，right
1.找到前面的第一个下降拐点left，后面的第一个上升拐点right；此时数组被分为 A,B,C 三部分，其中 A 和 C 必定为升序数组
2.遍历出 B 部分之间的最大值和最小值
3.遍历 A 部分，找出比最小值大的位置，更新left 值；遍历 B部分，找出比最大值小的位置，更新 right 值
此时 left right 指向的位置就是结果要查找的数组
*/
var findUnsortedSubarrayHard = function (nums) {
  let len = nums.length,
    left = 0,
    right = 0,
    result;
  for (let i = 1; i < len; i++) {
    let last = nums[i - 1],
      cur = nums[i];
    if (cur < last) {
      left = i - 1;
      break;
    }
  }
  let leftVal = nums[left];
  for (let i = len - 1; i > left; i--) {
    let last = nums[i - 1],
      cur = nums[i];
    if (cur < last || cur < leftVal) {
      right = i;
      break;
    }
  }
  // 还要找出 left 和 right 之间的最小数。
  let min = 1000000,
    max = -1000000;
  for (let i = left; i <= right; i++) {
    min = Math.min(nums[i], min);
    max = Math.max(nums[i], max);
  }

  let tem = left;
  for (let i = 0; i < tem; i++) {
    if (nums[i] > min) {
      left = i;
      break;
    }
  }

  for (let i = len - 1; i > right; i--) {
    if (nums[i] < max) {
      right = i;
      break;
    }
  }

  if (left === right) {
    result = 0;
  } else if (left > right) {
    result = len;
  } else {
    result = right - left + 1;
  }
  console.log("---", result, "---", left, right);
  return result;
};

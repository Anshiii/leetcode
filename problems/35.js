//35. 搜索插入位置

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  // nums length 为 1,需要等号
  while (left <= right) {
    let mid = left + Math.ceil((right - left) / 2);
    if (nums[mid] >= target) {
      if (mid === 0 || nums[mid - 1] < target) {
        return mid;
      }
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  // 此时 应该是 mid 为最后一个数，且该数小于 target，且 right = mid, left = mid + 1
  return left;
};

console.log(searchInsert([1, 2, 3, 4], 8));
console.log(searchInsert([1, 2, 3], 8));
console.log(searchInsert([1, 6, 9], 8));

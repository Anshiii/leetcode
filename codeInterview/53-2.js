/* 

一个长度为n-1的递增排序数组中的所有数字都是唯一的，
并且每个数字都在范围0～n-1之内。
在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。


示例 1:

输入: [0,1,3]
输出: 2
示例 2:

输入: [0,1,2,3,4,5,6,7,9]
输出: 8
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let len = nums.length;

  let left = 0,
    right = len - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) * 0.5);
    /* 实际上不会出现小于的情况 */
    if (nums[mid] <= mid) {
      /* 说明右边缺了 */
      left = mid + 1;
    } else if (nums[mid] > mid) {
      // 说明左边缺了
      right = mid - 1;
    }
  }

  console.log(left, right);
  /* 为什么是 left 呢。。。 */
  return left;
};

missingNumber([0]);
missingNumber([1]);
missingNumber([0, 1, 3]);
missingNumber([0, 1, 2, 4]);
missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]);

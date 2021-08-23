/* 
找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
请找出数组中任意一个重复的数字。

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let map = {},
    array = []; // <NUM ,COUNT>
  /* 因为 num 和 count 都是数字，可以考虑用 array 来解决 */
  len = nums.length;
  for (let i = 0; i < len; i++) {
    let cur = nums[i];
    if (array[cur] !== undefined) {
      return cur;
    } else {
        array[cur] = 1;
    }
  }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));

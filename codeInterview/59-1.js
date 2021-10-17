/* 

给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  /* 
  和之前的一道 O(1) 求最大值的题目很像哇，移动窗口就是 shift + push;
  之前是 push + pop ， 使用的 单调栈 ，单调栈是 push + pop
  这次是 shift + push， 也要 shift + push ？ 所以是单调队列？
  */
  if (k <= 1) return nums;

  let len = nums.length,
    i = 1 - k,
    j = 1,
    maxQueue = [nums[0]],
    result = [];

  for (; j < len; i++, j++) {
    let last = maxQueue[0];
    let pushOne = nums[j];

    if (i >= 0) {
      let shiftOne = nums[i];
      result.push(last);

      if (shiftOne === last) {
        maxQueue.shift();
      }
    }
    // maxQueue 可能是空的
    while (maxQueue.length && pushOne > maxQueue[maxQueue.length - 1]) {
      maxQueue.pop();
    }
    maxQueue.push(pushOne);
  }
  result.push(maxQueue[0]);

  return result;
};

console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));

console.log(maxSlidingWindow([1], 0));
console.log(maxSlidingWindow([], 0));

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 1));
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 2));
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 8));
console.log(maxSlidingWindow([1], 1));

/* 
剑指 Offer II 090. 环形房屋偷盗
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length;
  if (len === 1) return nums[0];

  /* 基本逻辑和上一题相似，设最后一个房屋下标为 k ，针对 f(k)  Max( f(k-1), f(k)&&不包含 f(0) 的价值) 后者相当于 从 1 开始偷窃到 k 的最大值   */
  let fromZero = [nums[0], Math.max(nums[0], nums[1])],
    fromOne = [0, nums[1]];

  if (len === 2) return fromZero[1];
  for (let i = 2; i < len; i++) {
    const cur = nums[i];
    fromZero[2] = Math.max(fromZero[0] + cur, fromZero[1]);
    fromZero[0] = fromZero[1];
    fromZero[1] = fromZero[2];
    fromOne[2] = Math.max(fromOne[0] + cur, fromOne[1]);
    fromOne[0] = fromOne[1];
    fromOne[1] = fromOne[2];
  }

  return Math.max(fromZero[0], fromOne[2]);
};

console.log(rob([1, 2]));
console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));

/* 
剑指 Offer II 089. 房屋偷盗
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  /* 设 f(n) 为前 n 的房间的最高偷盗金额；
    针对 f(n+1)， 可能是基于 f(n) 过来，此时还存在 n 房间是否盗窃的不确定性；针对 f(n-1)，确定结果为 f(n-1) + n+1 
    又因为，如果 f(n) 的 n 房间未被偷，此时 f(n) 是等于 f(n-1) 的。综合而已，只有两种情况

    f(n+1) = Max(f(n-1)+n+1,f(n))
    */

  let dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    const cur = nums[i];
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + cur);
  }
  return dp[nums.length - 1];
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([5]));
console.log(rob([2, 7, 9, 3, 1]));

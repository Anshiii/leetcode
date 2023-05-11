/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 *
 * 1. 排序然后两边加，  => X 最小和最大的未必不在一个组
 * 2. 计算总和S，能被2整除，且任意一个数不大于 S/2, 且存在子序列满足这个和的组合。
 *    暴力解法思路 计算 n 种情况的子序列的和 是否存在一种 使得 结果为 S/2
 *
 * 总和 S,目标 t = S/2, 数组 n
 * 1. 枚举前 n个 的数能组成的和可能，例如 1，2，5
 * {1}=>{0,1}
 * {1,2}=>{0,1,2,3}
 * {1,2,5}=>{0,1,2,3,5,6,7,8}
 * 在枚举的过程中，判断是否存在 一个可能为 t
 * 这符合动态规划的思路 dp[i]= each dp[i-1] + n[j]
 * dp[i]表示从前 n 个数中，选取若干个数，求出的和，的集合。
 *
 *
 * https://www.youtube.com/watch?v=IsvocB5BJhw&ab_channel=NeetCode
 */
var canPartition = function (nums) {
  let result = new Set([0, nums[0]]);
  let sum = nums.reduce((acc, cur) => acc + cur);
  if (sum % 2 !== 0) return false;
  sum = sum / 2;
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    let count = result.size;
    for (let j of result) {
      if (count <= 0) break;
      count--;
      let tem = j + cur;
      result.add(tem);
      if (tem === sum) return true;
    }
  }

  return false;
};

console.log(canPartition([1, 2, 5]));
console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));

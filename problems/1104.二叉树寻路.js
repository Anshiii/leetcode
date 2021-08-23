/*
 * @lc app=leetcode.cn id=1104 lang=javascript
 *
 * [1104] 二叉树寻路
 */

// [1] 2^1 -1
// [3] 2^2 -1
// [7] 2^3 -1
// [15] 2^4 -1

// @lc code=start
/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
  /* 从1开始计数高度 */
  const logNum = Math.ceil(Math.log(label) / Math.log(2));
  let result = [label],
    tem = label;
  for (let i = logNum - 1; i > 0; i--) {
    let lastOffset = tem - Math.pow(2, i) - 1;
    let currentOffset = Math.ceil(lastOffset / 2) -1;
    let current = Math.pow(2, i) - 1 + currentOffset * Math.pow(-1, i);
    tem = current;
    result.unshift(current);
  }
  console.log(result.join(","));
  return result;
};
// @lc code=end
pathInZigZagTree(14);
pathInZigZagTree(26);

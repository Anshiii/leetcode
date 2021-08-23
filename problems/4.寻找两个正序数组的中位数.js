/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  /* 找到排 n 或者 m + n 的平均数 */
  const l1 = nums1.length,
    l2 = nums2.length;
  let n, m;
  [n, m] = (l1 + l2) * (0.5).toString().split(".");
  if (m == 5) m = 0;
  m = m == 5 ? 0 : n + 1;

  let left = 0,
    right = 0;
  while (left < nums1.length && right < nums2.length && left + right <= m + n) {
    let nl = nums1[left],
      nr = nums2[right];
    if (nr < nl) {
      left++;
    } else {
      right++;
    }
  }
};
// @lc code=end

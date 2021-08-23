/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  /* 遍历记录字母数量，偶数的直接加上，奇数加一个 */
  let map = {},
    len = s.length,
    result = 0;
  for (let i = 0; i < len; i++) {
    let cur = s[i];
    if (map[cur] === undefined) {
      map[cur] = 1;
    } else {
      map[cur]++;
      if (map[cur] === 2) {
        result += map[cur];
        map[cur] = 0;
      }
    }
  }

  //   for (var key in map) {
  //     if (map[key] === 1) {
  //       result++;
  //       break;
  //     }
  //   }
  if (result < len) {
    result++;
  }
  return result;
};
// @lc code=end
longestPalindrome("abccccdd");

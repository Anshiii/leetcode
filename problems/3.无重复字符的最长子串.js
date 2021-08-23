/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let left = 0,
    right = 0,
    map = {};
  while (right < s.length) {
    let str = s[right];
    if (map[str] === undefined || map[str] < left) {
      result = Math.max(result, right - left + 1);
      map[str] = right;
      right++;
    } else {
      left = map[str] + 1;
      map[str] = right;
      right++;
    }
  }
  console.log(result);
  return result;
};
// @lc code=end

lengthOfLongestSubstring("aa"); //1

lengthOfLongestSubstring("pwwkew"); //3
lengthOfLongestSubstring(""); // 0
lengthOfLongestSubstring("aaaa"); //1
lengthOfLongestSubstring("abcabcbb"); //3

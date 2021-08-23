/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.split("");
  function revWord(start, end) {
    while (start < end) {
      let tem = s[start];
      s[start] = s[end];
      s[end] = tem;
      start++;
      end--;
    }
  }

  let len = s.length,
    i = 0,
    j = 0;
  while (i < len) {
    if (s[i] !== " ") {
      i++;
      continue;
    }

    revWord(j, i - 1);

    i++;
    j = i;
  }
  revWord(j, i - 1);
  return s.join("");
};
// @lc code=end

reverseWords("Let's take LeetCode contest");

/* 
请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

 

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let len = s.length;
  if (!len) return 0;

  let dp = [1],
    result = 1;

  let lastLetter = {
    [s[0]]: 0,
  };
  for (let i = 1; i < len; i++) {
    let cur = s[i],
      j = lastLetter[cur];

    if (j === undefined) {
      dp[i] = dp[i - 1] + 1;
    } else {
      if (i - j > dp[i - 1]) {
        dp[i] = dp[i - 1] + 1;
      } else {
        dp[i] = i - j;
      }
    }
    result = Math.max(result, dp[i]);
    lastLetter[cur] = i;
  }

  return result;
};

console.log(lengthOfLongestSubstring(" "));

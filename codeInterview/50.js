/* 
在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例:

s = "abaccdeff"
返回 "b"

// ABDCEC

s = "" 
返回 " "

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let result = " ",
    q = [],
    map = {},
    len = s.length;
  /* 遍历两次，第一次记录个数，第二次找出结果 */

  for (let i = 0; i < len; i++) {
    let cur = s[i];
    if (map[cur] === undefined) {
      map[cur] = 1;
      q.push(cur);
    } else {
      map[cur]++;
      if (q.length && map[q[0]] > 1) {
        q.shift();
      }
    }
  }

  return q[0] || " ";
};

console.log(firstUniqChar("itwqbtcdprfsuprkrjkausiterybzncbmdvkgljxuekizvaivszowqtmrttiihervpncztuoljftlxybpgwnjb"));
console.log(firstUniqChar("abaccdeff"));

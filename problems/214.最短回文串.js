/**
 * @param {string} s
 * @return {string}
 */

/**
 *
 * aacecaaa
 * a acecaaa ✓
 * aa cecaaa ✓
 * aac ecaaa x
 * aace caaa x
 * aacec aaa x
 * aaceca aa x
 * aacecaa a ✓
 *
 * 找出 s 的最长回文前缀即可
 *
 * 判断出s最长回文序列
 * 1. 暴力法，枚举s的前缀串是否为回文
 * 2. KMP 
 * 
 * 
 * 
 * KMP 找最短回文串思路
 * s^: aaacecaa
 * s :  aacecaaa
 * 找出最长回文串 s1， 是 s 
 * s 作为模式串， s^ 作为查询串，遍历到 s^ 末尾，如果
 */
var shortestPalindrome = function (s) {
  // 暴力解法 在之前加入 s s-1 s-2 ... 序列，找出最短的
  let length = s.length;

  function isPalindrome(s) {
    let i = 0,
      j = s.length - 1;

    while (i < j) {
      if (s[i] === s[j]) {
        i++;
        j--;
        continue;
      }
      return false;
    }
    return true;
  }
  let maxIndex = 1;

  // 这里应该可优化
  for (let i = 2; i <= length; i++) {
    const newS = s.slice(0, i);
    if (isPalindrome(newS)) {
      maxIndex = i;
    }
  }

  let prefix = "";
  for (let i = maxIndex; i < length; i++) {
    prefix = s[i] + prefix;
  }

  let result = prefix + s
  return result;
};


shortestPalindrome("abcd");
shortestPalindrome("aacecaaa");

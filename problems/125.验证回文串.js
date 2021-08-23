/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    const leftCode = s[left],
      rightCode = s[right];
    if (!checkCode(leftCode)) {
      left++;
      continue;
    }
    if (!checkCode(rightCode)) {
      right--;
      continue;
    }
    if (compareCode(leftCode, rightCode)) {
      left++;
      right--;
      continue;
    }
    return false;
  }

  return true;
};

function compareCode(a, b) {
  const codeA = a.charCodeAt();
  const codeB = b.charCodeAt();
  return (
    codeA === codeB ||
    (Math.abs(codeA - codeB) === 32 && codeA > 64 && codeB > 64)
  );
}

function checkCode(code) {
  /* 数字 + 字母 */
  return (
    (code >= "0" && code <= "9") ||
    (code >= "a" && code <= "z") ||
    (code >= "A" && code <= "Z")
  );
}
// @lc code=end
// isPalindrome("A man, a plan, a canal: Panama");
console.log(isPalindrome("ab_a"));
console.log(isPalindrome("0P"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));

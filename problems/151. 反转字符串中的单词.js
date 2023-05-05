/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // return s.split(' ').filter(i => i).reverse().join(' ')
  let start = -1,
    result = [],
    len = s.length;
  for (let i = 0; i < len; i++) {
    let cur = s[i];
    if (cur !== " " && start === -1) {
      start = i;
    }
    if (cur === " " && start !== -1) {
      result.unshift(s.slice(start, i));
      start = -1;
    }
  }
  if (s[len - 1] !== " " && start !== -1) {
    result.unshift(s.slice(start, len));
    start = -1;
  }
  result = result.join(" ");
  return result;
};
reverseWords("the sky is blue");
reverseWords("  hello world  ");
reverseWords("a good   example");

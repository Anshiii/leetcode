/* 

请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

输入：s = "We are happy."
输出："We%20are%20happy."

*/

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  //   return s.replace(/ /g, "%20");
  /* js 字符串不可变 */
  let result = "",
    len = s.length;

  for (let i = 0; i < len; i++) {
    if (s[i] === " ") {
      result += "%20";
    } else {
      result += s[i];
    }
  }

  return result;
};

replaceSpace("We are happy.");

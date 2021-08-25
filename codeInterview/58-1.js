/* 
输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

 

示例 1：

输入: "the sky is blue"
输出: "blue is sky the

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // return s.split(' ').filter(item=>item).reverse().join(' ')
  //空格和结尾
  let len = s.length,
    left = -1,
    right = -1,
    result = [];

  function reverse(start, end) {
    if (result[result.length - 1]) result.push(" ");
    for (let j = start; j <= end; j++) {
      result.push(s[j]);
    }
  }

  for (let i = len - 1; i >= 0; i--) {
    let cur = s[i];
    if (cur === " " && right !== -1) {
      left = i + 1;
      reverse(left, right);
      right = -1;
      continue;
    }

    if (cur !== " " && right === -1) {
      if (i === 0) {
        reverse(i, i);
        right = -1;
        continue;
      }
      right = i;
      continue;
    }

    if (i === 0 && cur !== " " && right !== -1) {
      left = i;
      reverse(left, right);
      right = -1;
    }
  }

  return result.join("");
};

console.log(reverseWords(" "));
console.log(reverseWords("a good   example"));
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world!  "));

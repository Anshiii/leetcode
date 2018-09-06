/**
 * Created by Anshi on 2018/8/21.
 */
/*给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。


 tag:动态规划
 */

// 步骤图 https://leetcode.com/problems/longest-valid-parentheses/solution/


/**
 * @param {string} s
 * @return {number}
 */


//动态规划 或者 栈 的解法。
var longestValidParentheses = function (s) {
  let dpArr = [0]
  let max = 0;

  /*dpArr[i] 并不是字符串 0-i 之间最大值呢，有个累加。。*/
  for (var i = 1; i < s.length; i++) {
	let cur = s[i];

	if (cur === '(') {
	  dpArr[i] = 0;
	  continue;
	} else {
	  // cur 是 ） str[i-1]是( 或者 cur能囊括之前的有效序列。  这样的话 dpArr[i]= dpArr[i-1]
	  //假设最大就是尾部。
	  // ..))
	  if (s[i - dpArr[i - 1] - 1] === '(' && s[i - 1] === ')') {
		dpArr[i] = dpArr[i - 1] + 2 + ( dpArr[i - dpArr[i - 1] - 2] || 0)
	  } else {
		dpArr[i] = 0;
	  }
	  //()()
	  if (s[i - 1] === '(') {
		dpArr[i] = (dpArr[i - 2] || 0) + 2

	  }
	}
	max = Math.max(max, dpArr[i])
  }

  console.log(max, dpArr)
  return max
};

longestValidParentheses(")(()()()((((())")
longestValidParentheses("()((()))")
longestValidParentheses(")()())")
longestValidParentheses("()")
longestValidParentheses("(()())")
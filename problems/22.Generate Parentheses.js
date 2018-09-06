/**
 * Created by Anshi on 2018/8/17.
 */


/*给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

 */
/**
 * @param {number} n
 * @return {string[]}
 */

//并没有很清楚递归的意义，为什么递归可以遍历出这么多东西来？

var generateParenthesis = function (n) {

  let result = [];

  function backtrack(S, A, B) {
	if (S.length >= 2 * n) {
	  result.push(S)
	  return;
	}
	if (A > B) {
	  backtrack(S + ')', A, B + 1)
	}
	if (A < n) {
	  backtrack(S + '(', A + 1, B)
	}


  }

  backtrack('', 0, 0)
  return result
};


console.log(generateParenthesis(5))
/**
 * Created by Anshi on 2018/8/17.
 */
/*
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

 有效字符串需满足：

 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 注意空字符串可被认为是有效字符串
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let result = true;
  let current = [];
  let startStr = {
	'(': ')',
	'{': '}',
	'[': ']'
  };


  for (var i = 0; i < s.length; i++) {

	/*属于起始的括号*/
	let now = s[i];
	if (startStr[now]) {
	  current.push(now);
	} else {
	  let lastItem = current.pop();
	  if (now === startStr[lastItem]) {
		continue;
	  }
	  result = false;
	  break;
	}
  }
  if (current.length > 0) {
	result = false;
  }

  console.log(result)
  return result;
}


isValid('[([])]');
isValid("([)");
isValid("(");



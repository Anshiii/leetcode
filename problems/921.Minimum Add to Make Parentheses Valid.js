/**
 * Created by Anshi on 2019/1/24.
 */

/**
 * @param {string} S
 * @return {number}
 */

//--
var minAddToMakeValid = function (S) {
  //假设当前是最大值，贪心？
  let startNum = 0, endNum = 0;
  for (let i = 0, len = S.length; i < len; i++) {
	let cur = S[i];
	if (cur === '(') {
	  startNum++;
	} else {
	  if (startNum < 1) {
		endNum++;
	  } else {
		startNum--;
	  }
	}
  }
  return startNum + endNum;
};


/*括号+有效，往往好像能用栈来做。有效括号出栈。然而速度还是很忙。。。前排大佬好像用了正则。*/
var minAddToMakeValid2 = function (S) {
  let stack = [];
  for (let i = 0, len = S.length; i < len; i++) {
	let cur = S[i];
	if (cur === '(') {
	  stack.push(cur);
	} else {
	  if (stack[stack.length - 1] === '(') {
		stack.pop();
	  } else {
		stack.push(cur)
	  }
	}
  }
  //console.log(stack.length)
  return stack.length;
};

minAddToMakeValid2("()))((")
minAddToMakeValid2("(((")
minAddToMakeValid2("())")
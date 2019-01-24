/**
 * Created by Anshi on 2018/10/9.
 */


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = s[0] || '';

  let local = '';
  for (let i = 1; i < s.length; i++) {
	/*这种方法的思路其实是 对每一个字母都视为中心 得出的答案比较最长的，只是计算过程混合在遍历中了。
	 * 目前遇到的问题就是 当 str 又能继承 local 又能另起炉灶时 就需要用数组记录多种可能...最差的话就是 n*n 了。*/

	//每次遍历找的是？ 当前字母的可组成的最大序列？
	let str = s[i];
	/*保持原来的奇偶性，维持下去。*/
	if (str === s[i - local.length - 1]) {
	  local = s[i - local.length - 1] + local + str
	  continue
	}

	/*奇偶切换，如：本来是奇的回文变成偶的回文,str 和 local 第一位相等*/
	if (str === local[0]) {
	  let flag = true;
	  for (let z = 1; z < (Math.ceil(local.length * 0.5)); z++) {
		if (local[z] !== local[local.length - z]) {
		  flag = false;
		  break;
		}
	  }
	  if (flag) {
		local = local + str;
		continue
	  }
	}

	result = result.length > local.length ? result : local;
	/*继承不了 local 另起炉灶。*/
	if (str === s[i - 1]) {
	  local = s[i - 1] + str
	  continue
	}
	if (str === s[i - 2]) {
	  local = s[i - 2] + s[i - 1] + str;
	  continue;
	}
	local = '';

  }
  result = result.length > local.length ? result : local;

  console.log(result);
  return result;

};

var longestPalindrome2 = function (s) {
  var p = [{}];
  var result = [0, 0];

  // 初始化
  for (var i = 0; i < s.length; i++) {
	p[i] ? p[i] = {} : p[i + 1] = {};
	// console.log(p[i],p[i+1])
	p[i][i] = true;
	p[i + 1][i] = true;// 这一步很关键，只是用于初始化
  }
  for (var i = 1; i < s.length; i++) {
	for (var j = 0; j < s.length - i; j++) {
	  p[j][j + i] = p[j + 1][j + i - 1] && (s[j] == s[j + i]);
	  p[j][j + i] && i > result[0] ? (result[0] = i, result[1] = j) : (null);
	}
  }
  return s.substr(result[1], result[0] + 1);
};


/*longestPalindrome('bbbb') //bbbb
 longestPalindrome('babab') //babab

 longestPalindrome('zzabcdcba')
 longestPalindrome('cbccbc') //cbccbc
 longestPalindrome('abaaba')

 /!*回文不是应该至少..两个字符吗*!/
 longestPalindrome('a')
 longestPalindrome('')
 longestPalindrome('ac')*/

longestPalindrome("ababababababa") //"ababab a bababa"
// longestPalindrome("ababaaababa") //"ababab a bababa"



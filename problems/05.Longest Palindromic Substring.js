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
	//每次遍历找的是？ 当前字母的可组成的最大序列？ 目前的最大序列(这个做为 result)？
	let str = s[i];
	/*保持原来的奇偶性，维持下去。*/
	if (str === s[i - local.length - 1]) {
	  local = s[i - local.length - 1] + local + str
	  continue
	}

	/*local 初始值为0，所以没有起始为奇的情况，要额外标记。*/
	if (!local && str === s[i - 2]) {
	  local = s[i - 2] + s[i - 1] + str;
	  continue;
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

longestPalindrome('bbbb') //bbbb
longestPalindrome('babab') //babab

longestPalindrome('zzabcdcba')
longestPalindrome('cbccbc') //cbccbc
longestPalindrome('abaaba')

/*回文不是应该至少..两个字符吗*/
longestPalindrome('a')
longestPalindrome('')
longestPalindrome('ac')

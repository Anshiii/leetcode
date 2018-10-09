/**
 * Created by Anshi on 2018/10/2.
 */


/**
 * @param {string} s
 * @return {number}
 */

/*无重复字符串，map 设定。*/

/*可以把指定 index 之前的数据删除 数组。*/
var lengthOfLongestSubstring = function (s) {
  let map = {};
  /*最小值是1,*/
  let result = 0;

  let start = 0;
  for (let i = 0; i < s.length; i++) {
	let str = s[i];
	if (i === s.length - 1) {
	  if (map[str] >= start) {
		result = Math.max(result, i - start);
	  } else {
		result = Math.max(result, i - start + 1);
	  }
	  break;
	}
	if (map[str] >= start) {
	  result = Math.max(result, i - start);
	  /*遇到相同的。*/
	  start = map[str] + 1;
	}
	map[str] = i;
  }
  return result
};

/*双指针解法？？？ 怎么...*/
/*看到有个用 str.indexOf 方法的...按理不应该更慢吗？？？？*/

lengthOfLongestSubstring('pwwkew')
lengthOfLongestSubstring('abadc')
lengthOfLongestSubstring('aaaaaa')
lengthOfLongestSubstring(' ')
lengthOfLongestSubstring('')
/**
 * Created by Anshi on 2018/8/16.
 */
/*
 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。
 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

 J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。*/


/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

var numJewelsInStones = function (J, S) {
  let result = 0;
  let jew = {}
  for (let i = 0; i < J.length; i++) {
	jew[J[i]] = 1
  }


  for (var i = 0; i < S.length; i++) {
	result = (jew[S[i]] || 0) + result;
  }
  return result;
};


/*这里误解了意思 可以用来查找 S 中 J的个数。呵呵呵呵呵*/
var numJewelsInStones2 = function (J, S) {

  let result = 0;

  function isJew(start) {

	var idx = 1;
	while (idx < J.length && J[idx] === S[start + idx]) {
	  idx++;
	}
	/*如果 idx >= J.leng 就可以认为 有珠宝，同时 遍历从 start + idx 开始*/
	return idx;
  }

  for (var i = 0; i < S.length; i++) {
	if (S[i] === J[0]) {
	  let idx = isJew(i)
	  if (idx >= J.length) {
		result++;
	  }
	  i = i + idx
	}
  }
  return result;
};

console.log(numJewelsInStones('as', 'asdadwasssasseerewrasddadfe'))
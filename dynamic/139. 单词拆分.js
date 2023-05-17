/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/**
 * 1. 暴力解法
 * 把单词拆分 n 份，保证每一份都能在 wordDict 找到对应解
 *  以 leetcode 为例
 *  inDict("l") && inDict("eetcode")
 *  inDict("le") && inDict("etcode")
 *  inDict("lee") && inDict("tcode")
 *  inDict("leet") && inDict("code")
 *  inDict("leetc") && inDict("ode")
 *  ... ...
 *  inDict("leetcod") && inDict("e")
 *
 */
var wordBreak = function (s, wordDict) {
  const dp = {};
  const wordMap = wordDict.reduce((acc, cur) => {
    acc[cur] = 1;
    return acc;
  }, {});

  function inDict(str) {
    if (dp[str] !== undefined) return dp[str];
    if (wordMap[str]) return true;
    if (str.length === 1) return false;
    let tem = false;
    for (let i = 1; i < str.length; i++) {
      const left = str.slice(0, i);
      const right = str.slice(i);
      tem = inDict(left) && inDict(right);
      if (tem === true) {
        break;
      }
    }

    dp[str] = tem;
    return tem;
  }

  const result = inDict(s);
  return result;
};

//s = "leetcode", wordDict = ["leet", "code"]
wordBreak("leetcode", ["leet", "code"]);
wordBreak("applepenapple", ["apple", "pen"]);
wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);

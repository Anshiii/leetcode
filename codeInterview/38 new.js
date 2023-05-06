/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  let result = [];
  let used = {};
  let picked = {};

  function pick(str) {
    // 位置 结果 重复'' 'a' 'a'
    if (str && picked[str]) return;
    if (str) picked[str] = 1;
    if (str.length === s.length) {
      result.push(str);
      return;
    }
    for (let i = 0; i < s.length; i++) {
      if (used[i] === 1) continue;
      used[i] = 1;
      pick(str + s[i]);
      used[i] = 0;
    }
  }
  pick("");
  return result;
};

permutation("aac");
permutation("abc");

/**
 * @param {string} s
 * @return {string[][]}
 */

/**
 * 针对任意 s 至少存在一种方案，在每个字符后分割，此时分割的每一份都是回文串
 * 如果要寻求其他的方案，则考虑可以合并的情况
 *
 * 如果让判断回文串的时间复杂度下降？预处理
 * f(i,j) 表示字符串 s 的子串[i,j]是否为回文串
 * 则 f(i,j)  = f(i+1,j-1) && s[i]===s[j]
 *
 */
var partition = function (s) {
  let memory = [[true]]; // 表示
  let len = s.length;
  let result = [];
  let path = [];

  function isPartition(i, j) {
    console.log(1);
    if (memory[i] && memory[i][j] !== undefined) return memory[i][j];
    // 单个字符串都为回文串
    if (i === j) return true;
    // 表示空串，为回文串
    if (i > j) return true;
    let result;
    if (memory[i + 1] && memory[i + 1][j - 1] !== undefined) {
      result = s[i] === s[j] && memory[i + 1][j - 1];
    } else {
      result = s[i] === s[j] && isPartition(i + 1, j - 1);
    }
    memory[i] = memory[i] || [];
    memory[i][j] = result;
    return result;
  }

  function backtrace(position) {
    if (position >= len) {
      result.push([...path]);
      return;
    }

    for (let i = position; i < len; i++) {
      if (isPartition(position, i)) {
        path.push(s.substring(position, i + 1));
        backtrace(i + 1);
        path.pop(s.substring(position, i + 1));
      }
    }
  }

  backtrace(0);
  return result;
};

partition("aab");
partition("aabaab");

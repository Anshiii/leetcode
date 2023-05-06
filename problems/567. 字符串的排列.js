/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/**
 * 子串 子序列 ； 排列  组合；
 * s1:abc s2:kkkbca
 * abc 的排列 >> abc acb bac bca cab cba  [offer 38]
 *
 * 1. 枚举 s1 的排列，和 s2 做字符串匹配； O(n*n*m)
 * 2. 遍历 s2,确定一串子序列 n，长度和 s1 相同，是 s1 的排列。
 */
var checkInclusion = function (s1, s2) {
  let len1 = s1.length,
    len2 = s2.length;
  let s1Map = {};
  for (let i = 0; i < len1; i++) {
    const element = s1[i];
    s1Map[element] = s1Map[element] ? s1Map[element] + 1 : 1;
  }

  function isEqual(map1, map2) {
    let keys1 = Object.keys(map1);
    let keys2 = Object.keys(map2);
    if (keys1.length !== keys2.length) return false;
    for (let i = 0; i < keys1.length; i++) {
      const key = keys1[i];
      if (map1[key] !== map2[key]) {
        return false;
      }
    }
    return true;
  }

  let s2Map = {};
  for (let i = 0; i < len2; i++) {
    const element = s2[i];
    s2Map[element] = s2Map[element] ? s2Map[element] + 1 : 1;
    if (i >= len1 - 1) {
      if (isEqual(s1Map, s2Map)) return true;
      let popEle = s2[i - len1 + 1];
      if (s2Map[popEle] === 1) {
        delete s2Map[popEle];
      } else {
        s2Map[popEle] = s2Map[popEle] - 1;
      }
    }
  }

  return false;
};
console.log("---anshi---", checkInclusion("adc", "dcda"));
console.log("---anshi---", checkInclusion("ab", "eidbaooo"));
console.log("---anshi---", checkInclusion("ab", "acaacb"));

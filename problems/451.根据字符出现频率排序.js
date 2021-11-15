/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // 定桶 排桶？
  let len = s.length;
  let map = {};
  let maxFre = 0;
  for (let i = 0; i < len; i++) {
    const element = s[i];
    !map[element] && (map[element] = 0);
    map[element]++; // 记录频率
    maxFre = Math.max(maxFre, map[element]);
  }

  let freArr = {};
  Object.keys(map).forEach((letter) => {
    const count = map[letter];
    !freArr[count] && (freArr[count] = []);
    const sumLetter = new Array(count).fill(letter);
    freArr[count] = freArr[count].concat(sumLetter);
  });

  let result = [];
  // 按频率遍历桶，并重新组合
  for (let i = maxFre; i >= 1; i--) {
    const bucket = freArr[i];
    if (!bucket) continue;
    result = result.concat(bucket);
  }
  return result.join('');
};



// @lc code=end

console.log(frequencySort("cccaaaddddd"));
console.log(frequencySort("a"));

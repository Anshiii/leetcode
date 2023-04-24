/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const resultList = [];

  // START  >>>> 和排列的区别
  function pickNumber(number, paths, start = 0) {
    if (number === target) {
      return resultList.push([...paths]);
    }
    for (let i = start; i < candidates.length; i++) {
      const element = candidates[i];
      // 剪枝
      if (number + element > target) break;
      paths.push(element);
      pickNumber(number + element, paths, i);
      paths.pop(element);
    }
  }

  pickNumber(0, []);
  return resultList;
};

combinationSum([2, 3, 6, 7], 7);
combinationSum([2, 3, 5], 8);

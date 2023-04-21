/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const usedIdx = {};
  const pathsUsed = {};
  const resultList = [];

  function pickNumber(paths) {
    //record paths 剪枝
    if (pathsUsed[paths.toString()]) return;
    console.log("---anshi---paths", paths);

    pathsUsed[paths.toString()] = true;
    if (paths.length === nums.length) {
      resultList.push([...paths]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (usedIdx[i]) continue;
      const element = nums[i];
      paths.push(element);
      usedIdx[i] = true;
      pickNumber(paths);
      paths.pop();
      usedIdx[i] = false;
    }
  }

  pickNumber([]);
  return resultList;
};

// permuteUnique([1, 2, 3]);
permuteUnique([1, 1, 3]);

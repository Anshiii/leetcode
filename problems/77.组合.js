/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// 组合 不看重顺序
var combine = function (n, k) {
  //[1,n] => pick k numbers
  let nums = new Array(n).fill(0);
  nums = nums.map((v, idx) => idx + 1);

  const resultList = [];
  function pickNumber(paths = [], start = 0) {
    console.log("---anshi---paths", paths);
    if (paths.length === k) {
      resultList.push([...paths]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      const element = nums[i];
      paths.push(element);
      pickNumber(paths, i + 1);
      paths.pop(element);
    }
  }
  pickNumber();
  return resultList;
};

combine(4, 2);

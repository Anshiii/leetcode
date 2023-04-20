/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// source - 单纯的深度优先搜索 可预见的缺点 为避免更改引用值，多次解构赋值,
var permute = function (nums) {
  let resultList = [];
  function pickNumber(array, paths) {
    if (array.length === 0) return paths;
    for (let i = 0; i < array.length; i++) {
      const tem = [...paths, array[i]];
      const newArray = [...array];
      newArray.splice(i, 1);
      const result = pickNumber(newArray, tem);
      result && resultList.push(result);
    }
  }
  pickNumber(nums, []);
  return resultList;
};

// 深度+回朔，有点难想象
var permute2 = function (nums) {
  const used = {};
  let resultList = [];
  function pickNumber(paths) {
    if (paths.length === nums.length) {
      resultList.push([...paths]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if (used[element]) continue;
      paths.push(element);
      used[element] = true;
      pickNumber(paths);
      paths.pop()
      used[element] = false;
    }
  }
  pickNumber([]);
  return resultList;
};

permute2([1, 2, 3]);
permute2([1]);
permute2([]);

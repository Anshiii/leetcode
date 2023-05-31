/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

/**
 * 和为 n 的 k 个数
 * @param {*} k
 * @param {*} n
 *
 * 1-9 数字只有取和不取两种可能 即 0 | 1
 * k 个数表示需要有 k 个 1
 *
 */
var combinationSum3 = function (k, n) {
  let path = [];
  let result = [];
  if (n > 45) return result;

  let arr = new Array(9).fill("").map((_, idx) => idx + 1);

  function backtrace(position, sum, start) {
    if (position >= k) {
      if (sum === n) {
        result.push([...path]);
      }
      return;
    }
    if (start >= arr.length) return;

    for (let i = start; i < arr.length; i++) {
      const element = arr[i];
      if (sum + element > n) break;
      path.push(element);
      sum += element;
      backtrace(position + 1, sum, i + 1);
      path.pop(element);
      sum -= element;
    }
  }
  backtrace(0, 0, 0);
  return result;
};

combinationSum3(9, 45);
combinationSum3(3, 7);
combinationSum3(3, 9);
combinationSum3(4, 1);

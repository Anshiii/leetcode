/* 
输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。


输入：target = 9
输出：[[2,3,4],[4,5]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence1 = function (target) {
  /* target/2 */

  const max = Math.ceil(target / 2),
    result = [];

  function calSum(s, e) {
    return (Math.pow(e, 2) - Math.pow(s, 2) + s + e) * 0.5;
  }

  function calNums(s, e) {
    let nums = [s];
    for (let i = s + 1; i <= e; i++) {
      nums.push(i);
    }
    return nums;
  }
  let left = max - 1,
    right = max;
  while (left > 0 && left < right) {
    let res = calSum(left, right);
    if (res === target) {
      let nums = calNums(left, right);
      result.unshift(nums);
      right--;
      left--;
    } else if (res > target) {
      right--;
    } else if (res < target) {
      left--;
    }
  }

  return result;
};

// 使用前缀和

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  // 因为至少含两个数，且两个数必须连续 右边边界为 target*0.5 ceil整数
  let end = Math.ceil(target * 0.5),
    preSum = 0,
    preMap = {
      0: 0, // 肯定只有1个，
    };
  let source = [0];
  let result = [];

  for (let i = 1; i <= end; i++) {
    source[i] = i;
    preSum += i;
    const diff = preSum - target;
    if (preMap[diff] !== undefined && i - preMap[diff] > 1) {
      // 取 preMap 下标后一位 到 i
      result.push(source.slice(preMap[diff] + 1, i + 1));
    }
    preMap[preSum] = i;
  }
  return result;
};

console.log(findContinuousSequence(1));

console.log(findContinuousSequence(9));
console.log(findContinuousSequence(15));

console.log(findContinuousSequence1(1));

console.log(findContinuousSequence1(9));
console.log(findContinuousSequence1(15));

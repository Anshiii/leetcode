/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function (nums) {
  let len = nums.length;
  let preMaxArr = [nums[0]],
    suffMinArr = [];
  let result = 0;

  for (let i = len - 1; i >= 0; i--) {
    const cur = nums[i];
    if (i === len - 1) {
      suffMinArr[i] = cur;
    } else {
      suffMinArr[i] = Math.min(suffMinArr[i + 1], cur);
    }
  }

  // 求美丽值  
  for (let j = 1; j < len - 1; j++) {
    const cur = nums[j];
    preMaxArr[j] = Math.max(preMaxArr[j - 1], cur);
    if (cur > preMaxArr[j - 1] && cur < suffMinArr[j + 1]) {
      result += 2;
    } else if (nums[j - 1] < cur && cur < nums[j + 1]) {
      result += 1;
    }
  }

  console.log(result);
  return result;
};

// 优化 求美丽值的循环和求 preMaxArr 的循环合并为一个

sumOfBeauties([2, 4, 6, 4]);
sumOfBeauties([1, 2, 3]);
sumOfBeauties([3,2,1]);

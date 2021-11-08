/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNonDuplicate1 = function (nums) {
  /* 
      如果把数字按序划分为两两一组，则[单独数]前面的组，数字一样大，后面的组，数字一大一小
    */
  // G 2 INDEX :  G*2, G*2 +1(判断是否超出)
  let leftG = 0,
    rightG = Math.ceil(nums.length / 2) - 1;
  while (leftG <= rightG) {
    let midG = leftG + Math.ceil((rightG - leftG) / 2);

    // last group:  must  last number
    if (midG === Math.ceil(nums / 2)) {
      return nums[nums.length - 1];
    }
    if (midG === 0) {
      return nums[0];
    }

    // the rest can call g*2+1 safely
    if (nums[midG * 2] === nums[midG * 2 + 1]) {
      leftG = midG + 1;
    } else if (nums[midG * 2] === nums[midG * 2 - 1]) {
      rightG = midG - 1;
    } else {
      // the single one must be the first number in a group
      return nums[midG * 2];
    }
  }
};

/* 使用异或解法 */
var singleNonDuplicate = function (nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const ele = nums[i];
    result = result ^ ele;
  }
  return result;
};

console.log(singleNonDuplicate([3, 3, 7, 7, 11, 11, 12]));
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
console.log(singleNonDuplicate([1, 3, 3, 7, 7, 11, 11]));

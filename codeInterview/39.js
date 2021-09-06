/* 

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

 

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let len = nums.length,
    map = {};

  for (let index = 0; index < len; index++) {
    const element = nums[index];
    if (map[element] === undefined) {
      map[element] = 1;
    } else {
      map[element]++;
    }
    if (map[element] >= len /2) {
      return element;
    }
  }
};

console.log(majorityElement([1,2,3,2,2,2,5,4,2]));

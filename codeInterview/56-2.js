/* 
在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。



*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = {},
    len = nums.length;
  for (let i = 0; i < len; i++) {
    // undefined
    // 3 清空
    let cur = nums[i];
    if (map[cur] === undefined) {
      map[cur] = 1;
    } else if (map[cur] === 2) {
      delete map[cur];
    } else {
      map[cur]++;
    }
  }
  return Object.keys(map)[0];
};


console.log(singleNumber([9,1,7,9,7,9,7]));
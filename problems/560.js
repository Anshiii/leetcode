/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let preSum = 0,
    count = 0,
    preSumMap = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    preSum += cur;

    let diff = preSum - k;
    if (preSumMap[diff]) {
      count += preSumMap[diff];
    }
    preSumMap[preSum] = preSumMap[preSum] ? preSumMap[preSum] + 1 : 1;
  }

  console.log(count);
  return count;
};
subarraySum([0, 0], 0); //3

subarraySum([1, 2, 3], 3); //2
subarraySum([1, 1, 1], 2); //2
subarraySum([-1, -1, 1], 0); //1
subarraySum([1], 1); //1


/* 
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */


// 只要是正的，加起来就最大； 正数 = 负数<正数 的组合
var maxSubArray = function (nums) {
    let len = nums.length, left = nums[0], result = left;
    for (let i = 1; i < len; i++) {
        let cur = nums[i]
        /* left < 0 ,只 cur ； >= 0,+cur  */
        if (left <= 0) {
            left = cur
        } else {
            left = left + cur
        }
        result = Math.max(result, left)

    }
    return result
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
/* 
从扑克牌中随机抽5张牌，判断是不是一个顺子，
即这5张牌是不是连续的。2～10为数字本身，
A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

示例 1:

输入: [1,2,3,4,5]
输出: True
 

示例 2:

输入: [0,0,1,2,5]
输出: True

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var isStraight = function (nums) {
    let len = nums.length, zero = 0, map = {}, min = Infinity, max = -1;
    for (let i = 0; i < len ; i++) {
        let cur = nums[i]
        if (cur === 0) {
            zero++
            continue
        }

        if (map[cur]) return false
        map[cur] = 1
        min = Math.min(min, cur)
        max = Math.max(max, cur)
    }
    const diff = max - min;
    if (diff - 4 <= zero) return true

    return false
};



var isStraight2 = function (nums) {
    nums.sort((a, b) => a - b)
    let len = nums.length, zero = 0;
    for (let i = 0; i < len - 1; i++) {

        if (nums[i] === 0) {
            zero++
            continue
        }

        const diff = nums[i + 1] - nums[i]
        if (diff === 1) {
            continue
        } else if (diff === 0) {
            return false
        } else {
            zero = zero - (diff - 1)
            if (zero < 0) {
                return false
            }
        }

    }

    return true
};

console.log(isStraight([0,0,0,5,9]));
console.log(isStraight([1, 2, 3, 4, 5]));

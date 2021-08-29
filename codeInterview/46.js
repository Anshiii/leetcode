/* 
给定一个数字，我们按照如下规则把它翻译为字符串：
0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

 

示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

var translateNum = function (num) {

    let str = num + '', len = str.length, dp = [1]
    function isOk(lastIdx) {
        if (lastIdx < 1) return false
        if (str[lastIdx - 1] == 0) return false
        let end = (str[lastIdx - 1] + str[lastIdx]) - 0

        return end <= 25
    }


    for (let i = 1; i < len; i++) {
        if (isOk(i)) {
            dp[i] = dp[i - 1] + ((i - 2) >= 0 ? dp[i - 2] : 1)
        } else {
            dp[i] = dp[i - 1]
        }
    }
    return dp[len - 1]
};

console.log(translateNum(12258)); // 5
console.log(translateNum(506)); // 1

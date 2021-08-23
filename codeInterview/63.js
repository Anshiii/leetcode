/* 
假设把某股票的价格按照时间先后顺序存储在数组中，
请问买卖该股票一次可能获得的最大利润是多少？


示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
  /* 遍历一次，左指针 遇小替换，换之前得出当前最大值，右指针基于左指针之后； */
  let startIdx = 0,
    len = prices.length,
    result = 0;
  for (let i = 1; i < len; i++) {
    if (prices[startIdx] > prices[i]) {
      startIdx = i;
    } else {
      result = Math.max(result, prices[i] - prices[startIdx]);
    }
  }
  return result;
};

/* 动态规划解法 */

var maxProfit = function (prices) {
  /* 遍历一次，左指针 遇小替换，换之前得出当前最大值，右指针基于左指针之后； */
  let min = prices[0],
    len = prices.length,
    dp = [0];
  if (!len) return 0;
  for (let i = 1; i < len; i++) {
    if (min > prices[i]) {
      min = prices[i];
    }

    dp[i] = Math.max(dp[i - 1], prices[i] - min);
  }
  return dp[len - 1];
};


console.log(maxProfit([1, 2]));
console.log(maxProfit([]));
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));


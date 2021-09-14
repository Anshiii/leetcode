/* 

我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。

*/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let dp = [1],
    p2 = 0,
    p3 = 0,
    p5 = 0;
  for (let i = 1; i < n; i++) {
    let tem2 = dp[p2] * 2,
      tem3 = dp[p3] * 3,
      tem5 = dp[p5] * 5;


    /*  */
    let min = Math.min(tem2, tem3, tem5);
    
    dp.push(min);
    if (min === tem2) {
      p2++;
      /* 不用 else 是因为会有重复相等的情况,可为什么能刚好是同一批次呢 */
    } if (min === tem3) {
      p3++;
    } if (min === tem5) {
      p5++;
    }
  }

  return dp[n - 1];
};

nthUglyNumber(12);

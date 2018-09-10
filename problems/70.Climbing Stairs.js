/**
 * Created by Anshi on 2018/9/10.
 */

/*
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 注意：给定 n 是一个正整数。

 示例 1：

 输入： 2
 输出： 2
 解释： 有两种方法可以爬到楼顶。
 1.  1 阶 + 1 阶
 2.  2 阶
 示例 2：

 输入： 3
 输出： 3
 解释： 有三种方法可以爬到楼顶。
 1.  1 阶 + 1 阶 + 1 阶
 2.  1 阶 + 2 阶
 3.  2 阶 + 1 阶

 dp[3]
 4.  1 + 1 +2
 5.2 +2



 */


/**
 * @param {number} n
 * @return {number}
 */

/*使用递归的时候，超出时间复杂度了...不解，差别有这么大吗。*/
/*dp[i] = dp[i-2]+ dp[i-1]*/
var climbStairs = function (n) {
  let dp = [0, 1, 2];


  for (let i = 3; i <= n; i++) {
	dp[i] = dp[i - 2] + dp[i - 1]
  }
  return dp[n];
};

console.log(climbStairs(45), climbStairs(9), climbStairs(3), climbStairs(10));
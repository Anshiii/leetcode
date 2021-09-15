/* 
把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。



你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
  /* 最小是 1*n n  最大是 6*n  6n
    总共 
    
    */
  let dp = [];
  // 骰子数为 1 时，结果 n ~ 6n 1-6的遍布概率。
  dp[0] = [0.16667, 0.16667, 0.16667, 0.16667, 0.16667, 0.16667];

  // 骰子数为 1 时，结果 n ~ 6n 2-12 的遍布概率。
  /*  
    2   dp[0][0] * 1/6 1 + 1
    3   dp[0][0]*1/6 + dp[0][1]* 1/6 1 + 2 , 2 + 1
    4   ... 1+3 2+2 3+1 
    */
  for (let num = 1; num <= n; num++) {
    let cur = [];
    dp[num] = cur;
    let min = num + 1,
      max = 6 * (1 + num);
    
      for (let index = 0; index < dp[num-1].length; index++) {
          const p = dp[num-1][index];

          
      }
    for (let i = min; i <= max; i++) {
      let p = 0;

      cur.push(p);
    }
  }
};

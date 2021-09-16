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
  let dp = [],base = 1/6
  // 骰子数为 1 时，结果 n ~ 6n 1-6的遍布概率。
  dp[0] = [base, base, base, base, base, base];

  // 骰子数为 1 时，结果 n ~ 6n 2-12 的遍布概率。
  /*  
    2   dp[0][0] * 1/6 1 + 1
    3   dp[0][0]*1/6 + dp[0][1]* 1/6 1 + 2 , 2 + 1
    4   ... 1+3 2+2 3+1 
    */
  for (let num = 1; num < n; num++) {
    let cur = [];
    dp[num] = cur;

    let lasToffset = num,
      currentOffset = num + 1; // num-1 个骰子数的 起始概率的值。

    for (let index = 0; index < dp[num - 1].length; index++) {
      const p = dp[num - 1][index];
      /* 从 fn-1,x 直接计算 fn,x+1 ... 有边界问题， 估使用 fn-1 所有的概率，各自计算后 累加。 */
      for (let count = 1; count <= 6; count++) {
        let resIdx = lasToffset + index + count - currentOffset; // 投掷的结果
        if (cur[resIdx]) {
          cur[resIdx] += p * base;
        } else {
          cur[resIdx] = p * base;
        }
      }
    }
  }
  return dp[n-1]
};

console.log(dicesProbability(3));


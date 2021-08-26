/* 
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
一个机器人从坐标 [0, 0] 的格子开始移动，
它每次可以向左、右、上、下移动一格（不能移动到方格外），
也不能进入行坐标和列坐标的数位之和大于k的格子。
例如，当k为18时，机器人能够进入方格 [35, 37] ，
因为3+5+3+7=18。但它不能进入方格 [35, 38]，
因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 

示例 1：

输入：m = 2, n = 3, k = 1
输出：3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let result = 0,
    map = {};

  function isIJOk(i, j) {
    return Math.floor(i / 10) + (i % 10) + Math.floor(j / 10) + (j % 10) <= k;
  }
  function go(i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n || !isIJOk(i, j)) return;
    let key = `${i}-${j}`;

    if (map[key]) return;
    result++;
    map[key] = 1;
    go(i + 1, j);
    go(i - 1, j);
    go(i, j + 1);
    go(i, j - 1);
  }
  go(0, 0);
  return result;
};

console.log(movingCount(2, 3, 1));
console.log(movingCount(3, 1, 0));

/* 
给定一个数组 A[0,1,…,n-1]，
请构建一个数组 B[0,1,…,n-1]，
其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。


输入: [1,2,3,4,5]
输出: [120,60,40,30,24]


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


*/

/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  // 以为又有什么特别公式
  /* 

    存两个动态规划数组 a,b，第一个是正序的 递乘结果 ,a = [1,a0,a0*a1,....]
    第二个是逆序的递乘结果，b = [ai*...a1,ai*...*a2,ai*...a3,...,ai*ai-1,ai,1]
    所求的 数组 res = [b0*a0,b1*a1 ]
    
    */

  let dpA = [1],
    len = a.length,
    result = [];
  if (!len) return result;
  for (let i = 1; i < len; i++) {
    dpA.push(dpA[i - 1] * a[i - 1]);
  }
  let dpB = [];
  dpB[len - 1] = 1;
  result[len - 1] = dpB[len - 1] * dpA[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    dpB[i] = dpB[i + 1] * a[i + 1];
    result[i] = dpB[i] * dpA[i];
  }
  return result;
};

console.log(constructArr([]));
console.log(constructArr([1, 2, 3, 4, 5]));



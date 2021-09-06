/* 

一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。
请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

 

示例 1：

输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  /* 如果这个特别的数字只有一个，
    例如：[1,2,3,2,1] 则 遍历 nums  n1^n2^n3^n4^n5  = (n1^n5)^(n2^n4)^n3 = n3 [ ^ 有加法的传递性吗]
    那如果有两个特别的数字 a，b 那么 全部 xor的结果是 a^b
    如何利用 a^b 得出 a，b ？  或者 区分出 a，b， 
    现在将所有数分为两组，首先，对于相同的数 和 a^b 的 与 操作结果肯定是相同，
    而对于 a&(a^b) 和 b&(a^b) ,结果与 a^b 中任意一个 1 位 ，比定有不同的结果。
    可据此分成两组
    
    */
  let len = nums.length,
    ayb = nums[0];
  for (let i = 1; i < len; i++) {
    ayb = ayb ^ nums[i];
  }

  /* 那如何计算出 ayb 的不为0最低位呢。。。 */
  let tem = 1;
  while ((tem & ayb) === 0) {
    tem = tem << 1;
  }

  let ayb1 = 0,
    ayb2 = 0;
  for (let i = 0; i < len; i++) {
    if (tem & nums[i]) {
      ayb1 = ayb1 ^ nums[i];
    } else {
      ayb2 = ayb2 ^ nums[i];
    }
  }
  return [ayb1, ayb2];
};


console.log(singleNumbers([1,2,3,4,5,3,2,1]));
/* 
写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。

 

示例:

输入: a = 1, b = 1
输出: 2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  /* 无进位和 与 异或运算 规律相同，进位 和 与运算 规律相同（并需左移一位）。 [ 这个肿么看出来的。。。]
     a + b = a^b + a&b<<1 = (a^b)^(a&b<<1)+ (a^b)&(a&b<<1)<<1  .... 直至第二个加数为0
      */
  let xor = a,
    and = b,
    tem = xor;
  while (and !== 0) {
    xor = xor ^ and;
    and = (tem & and) << 1;
    tem = xor;
  }
  return xor;
};

console.log(add(0b10101, 0b11101));

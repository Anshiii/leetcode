/* 

实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

/* 
-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104

*/
var myPow = function (x, n) {
  /* 
  针对 x^n , 将 n 转为二进制 2^0a1 +2^1a2 +.... 2^kak

  x^n =   x^(2^0a1 +2^1a2 +.... 2^kak) =  x^(2^0a1) * x^(2^1a2) * ... x^(2^kak)

  若 ai = 0 ,则 x^(2^iai) 为 0
  若 ai = 1,则 x^(2^iai) 为 x^(2^i）

  则 需要得出 a1 ... ak  （属于 0，1）
  
  */

  if (x === 0) {
    if (n > 0) {
      return 0;
    } else if (n < 0) {
      return Infinity;
    } else {
      return 1;
    }
  }
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let mx = x,result=1
  while (n) {
    if (n & 1) {
      result = result * mx;
    }
    mx = mx * mx;
    n =n >>> 1;
  }

  return result;
};

let c = 2.0;
d = -2147483648;
let a = 0.00001;
b = 2147483647;

console.log(myPow(c, d), Math.pow(c, d));


console.log(myPow(a, b), Math.pow(a, b));


console.log(myPow(3, 2), Math.pow(3, 2));

console.log(myPow(0, 2), Math.pow(0, 2));
console.log(myPow(0, -2), Math.pow(0, -2));
console.log(myPow(0, 0), Math.pow(0, 0));

console.log(myPow(2, 0), Math.pow(2, 0));
console.log(myPow(-2, 0), Math.pow(-2, 0));

console.log(myPow(2, -3), Math.pow(2, -3));
console.log(myPow(-2, -3), Math.pow(-2, -3));




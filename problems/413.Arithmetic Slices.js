/**
 * Created by Anshi on 2018/9/11.
 */
/*
 *
 * 如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列。

 数组 A 包含 N 个数，且索引从0开始。数组 A 的一个子数组划分为数组 (P, Q)，P 与 Q 是整数且满足 0<=P<Q<N 。

 如果满足以下条件，则称子数组(P, Q)为等差数组：

 元素 A[P], A[p + 1], ..., A[Q - 1], A[Q] 是等差的。并且 P + 1 < Q 。

 函数要返回数组 A 中所有为等差数组的子数组个数。
 */

/*
 * A = [1, 2, 3, 4,7,10,13]
 *     [0,0,1,2,0,1,2]

 返回: 3, A 中有三个子等差数组: [1, 2, 3], [2, 3, 4] 以及自身 [1, 2, 3, 4]。
 */


/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  if (A.length < 3) {
	return 0;
  }

  let dp = [0, 0]
  let result = 0;

  for (let i = 2; i < A.length; i++) {
	if (A[i - 1] - A[i - 2] === A[i] - A[i - 1]) {
	  dp[i] = dp[i - 1] + 1;
	} else {
	  dp[i] = 0;
	}
	result += dp[i]
  }
  return result;

};


console.log(numberOfArithmeticSlices([1, 2, 3, 4, 7, 10, 13]))
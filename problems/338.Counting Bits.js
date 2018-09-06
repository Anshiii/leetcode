/**
 * Created by Anshi on 2018/8/22.
 */
/*给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

 输入: 2
 输出: [0,1,1]

 输入: 5
 输出: [0,1,1,2,1,2]
 */


/*据说有规律 ： 从1开始 如果是偶数，其1的数量与该偶数/2得到的数的1的数量相同；
 * 如果是基数，其1的数量是该奇数/2后得到的商的1的数量+1
 * 这个规律是怎么的出来的，为什么呢？2进制的数真有趣
 /**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {

  var dpArr = [0];

  for (var i = 1; i <= num; i++) {
	if (i % 2 === 0) {
	  dpArr[i] = dpArr[parseInt(i / 2)]
	} else {
	  dpArr[i] = dpArr[parseInt(i / 2)] + 1
	}
  }

  console.log(dpArr);
  return dpArr

};
var countBits2 = function (num) {

  var dpArr = [0];

  for (var i = 1; i <= num; i++) {
	dpArr[i] = i.toString(2).replace(/0/g, '').length
  }

  console.log(dpArr);
  return dpArr

};
countBits(11)
countBits2(11)
countBits(8)
countBits2(8)

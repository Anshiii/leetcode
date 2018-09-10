/**
 * Created by Anshi on 2018/9/9.
 */

/*给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。


 输入: [-2,1,-3,4,-1,2,1,-5,4],
 输出: 6
 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */


/*为什么局部解的最大值 就是全局的最优解？？不懂。。。*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let local = nums[0];
  let global = local;
  let tem = [local];

  for (let i = 1; i < nums.length; i++) {
	/*这里为什么 local 是这个。。。 为什么局部的解的最大值就是全局最优解。
	 不会有漏加的情况吗，上一步选了 [nums] 但是 下一步 实际上是 nums[i] + nums[i-1] + local大一些??。*/
	local = Math.max(nums[i], local + nums[i]);
	tem.push(local)
	global = Math.max(local, global);
  }
  console.log(tem)
  return global
};


maxSubArray([1, 8, -1, 4, -1, 2, 1, -5, 4])
maxSubArray([-2, 1])
maxSubArray([-2, -1])
maxSubArray([1, 2])
maxSubArray([-3, 2, -7])
maxSubArray([8, -19, 5, -4, 20])



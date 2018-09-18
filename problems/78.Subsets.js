/**
 * Created by Anshi on 2018/8/30.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//要的是子集 [1,2] 和 [2，1] 视为相等。

/*
 * [ ]
 /   |   \
 [1]   [2]   [3]
 /  |     |
 [1, 2] [1, 3] [2, 3]
 /
 [1, 2, 3]

 。*/

/*用动态规划的思维
 *   //dp[i] = dp[i-1] 合并  dp[i-1]的每一项加上 nums[i]  类似78.
 * 但是数据量很大，就不要存了。
 * */
var subsets = function (nums) {
  let local = [[]];

  for (let i = 0; i < nums.length; i++) {
	let current = nums[i];
	let length = local.length;
	for (let j = 0; j < length; j++) {
	  local.push(local[j].concat(current));
	}
  }
  console.log(local)
  return local
}


subsets([1, 2, 3, 4])

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

var subsets = function (nums) {
}

//利用之前得到的结果 concat；
var subsets = function (nums) {
  let result = [[]];

  for (let position = 0; position < nums.length; position++) {
	let l = result.length;
	let current = [nums[position]];
	for (let j = 0; j < l; j++) {
	  let item = result[j].concat(current);
	  result.push(item)
	}
  }
  console.log(result)
  return result;
};


subsets([1, 2, 3])

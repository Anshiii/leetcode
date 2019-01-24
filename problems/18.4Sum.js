/**
 * Created by Anshi on 2019/1/3.
 */

//给予一个 无序的整数集合，给出所有能满足 a+b+c+d = n  的 abcd 的集合。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {

  /*整个数组（排序后），目标值，取几个数，起始遍历下标，当前定的值*/
  let toSum = (nums, target, k, start, current = []) => {
	let res = [];
	if (k === 2) {
	  let left = start,
		  right = nums.length - 1;
	  while (left < right) {
		if (nums[left] + nums[right] < target) {
		  left++;
		} else if (nums[left] + nums[right] > target) {
		  right--;
		} else {
		  res.push([nums[right], nums[left],])
		  left++;
		}
	  }
	} else {
	  for (let i = start; i < nums.length; i++) {
		/*默认选第一个元素*/
		current.push(nums[i])
		let other = toSum(nums, target - nums[i], k - 1, i + 1, current)
		res = res.concat(other.map(
			item => {
			  item.push(nums[i])
			  return item
			}
		))
	  }
	}
	return res;
  }

  let sortNum = nums.sort((a, b) => b - a)
  let result = toSum(sortNum, target, 4, 0)


  result = Set.form(new Set(result))
  /*去重*/
  result = result.reduce((acc, curr, index, array) => {
	switch (index) {
	  case array.length - 1:
		acc.push(curr);
		break;
	  default:
		if (curr.toString() !== array[index + 1].toString()) {
		  acc.push(curr)
		}
	}
	return acc;
  }, [])
  console.log(result)

  return result;

};

// fourSum([1, 0, -1, 0, -2, 2], 0)
fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0)
// fourSum([-7, -9, 0, 1, 2, 3, 9, 4, 1, 2, 8, 2, 10, 11], 0)
//
//
// var fourSum = function (nums, target) {
//   return kSum(nums, target, 4);
// };
//
// var kSum = function (nums, target, k) {
//
//   let toSum = (ns, t, k, start) => {
// 	let res = [];
// 	if (k == 2) { // recursive to only one target num ( the sum of last two num should be O(n^2))
// 	  for (let i = start; i < ns.length; i++) {
// 		if (ns[i] == t) return [[ns[i]]];
// 	  }
// 	} else {
// 	  for (let i = start; i < ns.length - k + 1; i++) {
// 		let temp = toSum(ns, t - ns[i], k - 1, i + 1);
// 		temp.forEach(t => {
// 		  t.push(ns[i]);
// 		  res.push(t);
// 		});
// 		//skip duplication
// 		while (i < ns.length - 1 && ns[i] == ns[i + 1]) i++;
// 	  }
// 	}
// 	return res;
//   }
//
//   nums = nums.sort((a, b) => a - b);
//   return toSum(nums, target, k, 0);
// };


const obj = {
  name: " jsCoder",
  skill: ["es6", "react", "angular"],
  say: function () {
	for (var i = 0, len = this.skill.length; i < len; i++) {
	  setTimeout(function () {
		console.log('No.' + i + this.name);
		console.log(this.skill[i]);
		console.log('————————–');
	  }, 0);
	  console.log(i);
	}
  }
};
obj.say();
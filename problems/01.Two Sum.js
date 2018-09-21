/**
 * Created by Anshi on 2018/9/17.
 */
/*
 *
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

 示例:

 给定 nums = [2, 7, 11, 15], target = 9

 因为 nums[0] + nums[1] = 2 + 7 = 9
 所以返回 [0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*常规解法*/
var twoSum = function (nums, target) {
  let result = [];

  out:for (let i = 0; i < nums.length; i++) {
	for (let j = i + 1; j < nums.length; j++) {
	  if (nums[i] + nums[j] === target) {
		result.push(i)
		result.push(j)
		break out;
	  }
	}
  }

  return result
};

/*排序解法 先将 nums 排序，然后 两端为起点向中间遍历，如果此时 两数和大于 target 必只能尾端向前；反之亦然，直至找到中间target*/

var twoSum2 = function (nums, target) {
  let result = [];

  let hashNum = {};
  nums.forEach((item, index) => {
	/*这里给所有数都做映射，但是会有重复的数所以用数组，其实因为只是两个数的和 可以只映射两个数的情况，第三个数直接扔掉*/
	if (hashNum[item] === undefined) {
	  hashNum[item] = index;
	} else if (Array.isArray(hashNum[item])) {
	  hashNum[item] = hashNum[item].push(index)
	} else {
	  hashNum[item] = [hashNum[item], index]
	}
  })

  /*直接更改原数组了呢...*/
  let sortNums = nums.sort((a, b) => a - b)

  let start = 0, end = nums.length - 1;

  out:while (start < end) {
	if (sortNums[end] + sortNums[start] === target) {
	  break;
	}

	while ((sortNums[start] + sortNums[end] > target)) {
	  end--;
	}

	while ((sortNums[start] + sortNums[end] < target)) {
	  start++;
	}
  }


  /*因为排序了，找到数后，要找到数的 index*/
  if (sortNums[end] + sortNums[start] === target) {
	if (Array.isArray(hashNum[sortNums[start]])) {
	  result[0] = hashNum[sortNums[start]].shift()
	} else {
	  result[0] = hashNum[sortNums[start]]
	}
	if (Array.isArray(hashNum[sortNums[end]])) {
	  result[1] = hashNum[sortNums[end]].shift()
	} else {
	  result[1] = hashNum[sortNums[end]]
	}
  }


  console.log(result)
  return result
};


/*哈希解法 最快
 先将 nums 转为 哈希表。根据 target 和 num[i] 得出要求的另一个数，hash快速查找是否存在这个数，不存在就跳出本次循环。*/
var twoSum3 = function (nums, target) {
  let result = [];
  let hashNum = {};

  function hashAdd(item, index) {
	if (hashNum[item] === undefined) {
	  hashNum[item] = index;
	} else if (Array.isArray(hashNum[item])) {
	  hashNum[item] = hashNum[item].push(index)
	} else {
	  hashNum[item] = [hashNum[item], index]
	}
  }

  for (let i = 0; i < nums.length; i++) {
	let item = nums[i];
	let end = target - item;
	if (hashNum[end] !== undefined) {
	  if (Array.isArray(hashNum[end])) {
		result = [hashNum[end].shift(), i]
	  } else {
		result = [hashNum[end], i]
	  }
	  break;
	}
	hashAdd(item, i)
  }

  console.log(result)
  return result
};

twoSum3([3, 3, 4], 7)
twoSum3([9, 1, 2, 3, 2, 3], 6)
twoSum3([2, 7, 11, 15], 17)
twoSum3([3, 2, 4], 6)

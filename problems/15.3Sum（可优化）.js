/**
 * Created by Anshi on 2018/9/17.
 */
/*
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

 注意：答案中不可以包含重复的三元组。

 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

 满足要求的三元组集合为：
 [
 [-1, 0, 1],
 [-1, -1, 2]
 ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*用时很长...看一前面的一些答案，没有本质区别，可能还需要一些优化。*/
var threeSum = function (nums) {
  let result = [];
  let sortNums = nums.sort((a, b) => a - b);

  /*如果最后一个数小于0直接返回*/
  if (sortNums[sortNums.length - 1] < 0) {
	return result;
  }

  /*固定一个数后，使用 2sum 双指针 的方法*/
  for (let i = 0; i < nums.length - 2; i++) {
	let target = nums[i];
	let start = i + 1, end = nums.length - 1;
	/*因为排序了，数肯定在前一位*/
	if (i > 0 && target === nums[i - 1]) {
	  continue
	}

	/*如果第一个数大于0则直接返回*/
	if (target > 0) {
	  break;
	}
	out:while (start < end) {
	  if (sortNums[end] + sortNums[start] + target === 0) {
		result.push([target, sortNums[start], sortNums[end]]);

		/*感觉用 start 会和 target 的判断有重复*/
		while (sortNums[end] === sortNums[--end]) {
		}
	  }
	  while ((sortNums[start] + sortNums[end] + target > 0 )) {
		end--;
	  }

	  while ((sortNums[start] + sortNums[end] + target < 0 )) {
		start++;
	  }
	}
  }

  console.log(result);
  return result
};
threeSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
threeSum([0, 0, 0])
threeSum([-1, 0, 1, 2, -1, -4])

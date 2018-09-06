/**
 * Created by Anshi on 2018/8/23.
 */

/*
 * 给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：

 二叉树的根是数组中的最大元素。
 左子树是通过数组中最大值左边部分构造出的最大二叉树。
 右子树是通过数组中最大值右边部分构造出的最大二叉树。
 通过给定的数组构建最大二叉树，并且输出这个树的根节点。
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var constructMaximumBinaryTree = function (nums) {


  function maxTree(arr) {

	console.log(arr.length)
	if (arr.length === 0) {
	  return null
	}
	if (arr.length === 1) {
	  return new TreeNode(arr[0])
	}
	/*找出最大值的下标*/
	let max = arr[0],
		maxIdx = 0;
	for (var i = 1; i < arr.length; i++) {
	  if (arr[i] > max) {
		max = arr[i];
		maxIdx = i;
	  }
	}


	let left = maxTree(arr.slice(0, maxIdx));
	let right = maxTree(arr.slice(maxIdx + 1));

	let result = new TreeNode(max);
	result.left = left;
	result.right = right;
	return result;
  }

  let result = maxTree(nums)
  console.log(result)
  return result;


};

// constructMaximumBinaryTree([3, 2, 1])
constructMaximumBinaryTree([3, 2, 1, 6, 0, 5])
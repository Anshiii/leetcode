/**
 * Created by Anshi on 2018/9/6.
 */

/*
 * 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。

 说明：
 你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。
 */




/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let result = [];

  function inorderTraversal(node) {
	if (!node)return;
	if (node.left) {
	  inorderTraversal(node.left)
	}
	result.push(node.val)
	if (result.length === k) {
	  return;
	}

	if (node.right) {
	  inorderTraversal(node.right)
	}

  }

  inorderTraversal(root)
  return result[k - 1];
}


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let a = new TreeNode(12)
a.right = new TreeNode(13)
a.right.right = new TreeNode(15)
a.left = new TreeNode(8)
a.left.left = new TreeNode(3)
a.left.right = new TreeNode(9)
a.left.left.right = new TreeNode(4)

kthSmallest(a, 5);
kthSmallest(null, 2);
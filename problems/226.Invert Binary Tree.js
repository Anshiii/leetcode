/**
 * Created by Anshi on 2018/8/24.
 */
/*
 * 翻转一棵二叉树。

 示例：

 输入：

 4
 /   \
 2     7
 / \   / \
 1   3 6   9
 输出：

 4
 /   \
 7     2
 / \   / \
 9   6 3   1
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
 * @return {TreeNode}
 */
var invertTree = function (root) {

  if (!root) return root
  function invert(parent) {
	let tem = parent.left;
	parent.left = parent.right;
	parent.right = tem;
  }

  let stack = [root];

  while (stack.length > 0) {

	let length = stack.length;

	stack.forEach(itemNode => {
	  invert(itemNode)
	  if (itemNode.left) {
		stack.push(itemNode.left)
	  }
	  if (itemNode.right) {
		stack.push(itemNode.right)
	  }
	})


	stack = stack.slice(length)
  }

  console.log(root)
  return root;

};

invertTree(null)
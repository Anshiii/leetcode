/**
 * Created by Anshi on 2018/8/28.
 */
// 给定一个二叉树，返回它的 后序 遍历。


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


/*非递归的解法？？？？*/
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var postorderTraversal = function (root) {
  let result = [];

  function tranversal(node) {
	if (!node)return;
	if (node.left) {
	  tranversal(node.left)
	}
	if (node.right) {
	  tranversal(node.right)
	}
	result.push(node.val);
  }

  tranversal(root);

  console.log(result)
  return result;
};

let a = new TreeNode(1)
a.right = new TreeNode(33)
a.right.right = new TreeNode(18)
let b = new TreeNode(2)
b.left = new TreeNode(11)
b.right = new TreeNode(20)
b.right.right = new TreeNode(5)
postorderTraversal(a);
postorderTraversal(b);
postorderTraversal(null);
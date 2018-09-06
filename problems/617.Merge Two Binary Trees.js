/**
 * Created by Anshi on 2018/8/27.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var mergeTrees = function (t1, t2) {

  let result;

  function iterator(root1, root2) {
	let node = null;
	if (root1 && root2) {
	  node = new TreeNode(root1.val, root2.val);
	  node.left = iterator(root1.left, root2.left)
	  node.right = iterator(root1.right, root2.right)
	} else {
	  if (root1) {
		node = new TreeNode(root1.val);
		node.left = iterator(root1.left, null)
		node.right = iterator(root1.right, null)
	  } else if (root2) {
		node = new TreeNode(root2.val)
		node.left = iterator(null, root2.right)
		node.right = iterator(null, root2.right)
	  }
	}
	return node
  }

  result = iterator(t1, t2);
  return result;
};

let a = new TreeNode(1)
a.right = new TreeNode(33)
a.right.right = new TreeNode(18)
let b = new TreeNode(2)
b.left = new TreeNode(11)
b.right = new TreeNode(20)
b.right.right = new TreeNode(5)
mergeTrees(a, b)
mergeTrees(a, null)
mergeTrees(null, b)


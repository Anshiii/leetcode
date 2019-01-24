/**
 * Created by Anshi on 2018/8/29.
 */


/*
 * 给定二叉树根结点 root ，此外树的每个结点的值要么是 0，要么是 1。

 返回移除了所有不包含 1 的子树的原二叉树。*/

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

/*如果想从 父节点对子节点操作 可以依靠前序递归；*/
var pruneTree = function (root) {

}


var pruneTree = function (root) {
  if (!root)return null
  if (!root.left && !root.right && root.val === 0) {
	return null;
  } else {
	root.left = pruneTree(root.left);
	root.right = pruneTree(root.right);
	if (!root.left && !root.right && root.val === 0) {
	  return null
	}
  }

  console.log(root);
  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let a = new TreeNode(1)
a.left = null
a.right = new TreeNode(0)
a.right.left = new TreeNode(0);
a.right.left.right = new TreeNode(0);
a.right.left.right.left = new TreeNode(1);

let b = new TreeNode(0)
b.left = new TreeNode(0)
b.right = new TreeNode(0)

// pruneTree(a);
pruneTree(b);

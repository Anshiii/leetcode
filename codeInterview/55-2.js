/* 
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。
如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  function deep(node, st = 0) {
    if (!node) return 0;
    let deepL = deep(node.left, st);
    let deepR = deep(node.right, st);
    if (Math.abs(deepL - deepR) <= 1 && deepR !== false && deepL !== false) {
      return Math.max(deepL, deepR) + 1;
    } else {
      return false;
    }
  }
  return deep(root) !== false ? true : false;
};

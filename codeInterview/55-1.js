/* 

输入一棵二叉树的根节点，
求该树的深度。
从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
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
 * @return {number}
 */
var maxDepth = function (root) {
  let deep = 0;
  if (!root) return deep;

  function iter(node, curDeep) {
    if (!node) {
      deep = Math.max(deep, curDeep);
      return;
    }
    if (!node.left && !node.right) {
      // 记录深度
      deep = Math.max(deep, curDeep + 1);
      return;
    }
    iter(node.left, curDeep + 1);
    iter(node.right, curDeep + 1);
  }

  iter(root, 0);
  return deep;
};

/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  function compare(left, right) {
    if (!left && !right) return;
    if (left?.val === right?.val) {
      compare(left.left, right.right);
      compare(left.right, right.left);
      return;
    }
    throw new Error();
  }

  try {
    compare(root.left, root.right);
  } catch (error) {
    return false;
  }
  return true;
};
// @lc code=end

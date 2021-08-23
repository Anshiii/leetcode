/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */

/* 使用堆栈实现后续 */
var postorderTraversal = function (root) {
  const result = [];
  if (!root) return result;
  const heap = [];
  let current = root,
    pre;
  while (current || heap.length) {
    while (current) {
      heap.push(current);
      current = current.left;
    }

    current = heap[heap.length - 1];

    if (!current?.right || current.right === pre) {
      result.push(current.val);
      pre = current;
      heap.pop();
      current = null;
    } else {
      pre = current;
      current = current.right;
    }
  }
  return result;
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const n3 = new TreeNode(3, null, null);
const n2 = new TreeNode(2, n3, null);
const root = new TreeNode(1, null, n2);
// postorderTraversal(root);

const z1 = new TreeNode(1, null, null);
const z3 = new TreeNode(3, null, z1);
const zroot = new TreeNode(2, null, z3);
postorderTraversal(zroot);

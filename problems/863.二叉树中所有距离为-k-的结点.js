/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  // 转成图
  let result = [],
    repeat = new Map();

  function changeTree(node, parent) {
    if (!node) return;
    node.parent = parent;
    changeTree(node.left, node);
    changeTree(node.right, node);
  }

  function loop(kNode, parent, path) {
    if (!kNode) return;
    if (repeat.has(kNode)) return;
    repeat.set(kNode, 1);
    if (path === 0) result.push(kNode);
    loop(kNode.left, kNode, path - 1);
    loop(kNode.right, kNode, path - 1);
    loop(parent, parent?.parent, path - 1);
  }

  changeTree(root, null);
  loop(target, target.parent, k);

  return result.filter((item) => item.val).map((item) => item.val);
};
// @lc code=end

// Javascript program to construct binary tree from
// given array in level order fashion

let root;

class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.val = data;
  }
}

// Function to insert nodes in level order
function insertLevelOrder(arr, root, i) {
  // Base case for recursion
  if (i < arr.length) {
    let temp = arr[i] ? new Node(arr[i]) : null;
    root = temp;
    if (!temp) return root;

    // insert left child
    root.left = insertLevelOrder(arr, root?.left, 2 * i + 1);

    // insert right child
    root.right = insertLevelOrder(arr, root?.right, 2 * i + 2);
  }
  return root;
}

// Function to print tree nodes in InOrder fashion

let arr = [0, null, 1, null, 2, null, 3, 4];
root = insertLevelOrder(arr, root, 0);

console.log(distanceK(root, root.left.right, 2));

// This code is contributed by suresh07.

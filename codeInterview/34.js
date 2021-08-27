/* 
输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。
从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

示例:
给定如下二叉树，以及目标和 target = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  let result = [];
  if (!root) return result;

  function def(root, k, path = []) {
    if (!root.left && !root.right) {
      if (k === 0) {
        result.push(path);
      }
      return;
    }

    if (root.left && root.left.val ) {
      def(root.left, k - root.left.val, [...path, root.left.val]);
    }
    if (root.right && root.right.val ) {
      def(root.right, k - root.right.val, [...path, root.right.val]);
    }
  }
  def(root, target - root.val, [root.val]);
  return result;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function arrToTree(arr) {
  let len = arr.length;
  if (!len) return null;
  let root = new TreeNode(arr[0]),
    last = [root],
    par;
  for (let i = 1; i < len; i++) {
    let cur = new TreeNode(arr[i]);
    last.push(cur);
    if (i % 2 === 1) {
      par = last.shift();
      par.left = cur;
    } else {
      par.right = cur;
    }
  }
  return root;
}


let A = arrToTree([1,-2,-3,1,3,-2,null,-1]);

console.log(pathSum(A, -1));

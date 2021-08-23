/* 
请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

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
var mirrorTree2 = function (root) {
  if (!root) return null;
  function copyTree(a, b) {
    if (!a) return;
    if (a.left) {
      b.right = new TreeNode(a.left.val);
    }
    if (a.right) {
      b.left = new TreeNode(a.right.val);
    }
    copyTree(a.left, b.right);
    copyTree(a.right, b.left);
  }

  let rootB = new TreeNode(root.val);
  copyTree(root, rootB);
  return rootB;
};

// 原地改
var mirrorTree = function (root) {
  if (!root) return null;

  const right = mirrorTree(root.right);
  const left = mirrorTree(root.left);
  root.left = right;
  root.right = left;
  return root;
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

let root = arrToTree([4, 2, 7, 1, 3, 6, 9]);
mirrorTree(root);

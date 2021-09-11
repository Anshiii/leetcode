/* 
剑指 Offer 07. 重建二叉树

输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。


前序遍历 中左右
中序遍历 左中右
极端情况下，可能没有左子树。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  /* - 优化， 1.不使用 slice，改传递下标； 2.hash 表存一次 inorder，方便快速找出 leftLength */
  let pLen = preorder.length,
    iLen = inorder.length;
  if (!pLen && !iLen) return null;
  /*  */

  const iHash = {};
  for (let i = 0; i < iLen; i++) {
    iHash[inorder[i]] = i;
  }

  function iter(pS, pE, iS, iE) {
    if (pS > pE && iS > iE) return null;
    let midVal = preorder[pS];
    let root = new TreeNode(midVal);

    /* 这是个重复的过程 */
    if (midVal === inorder[iS]) {
      // 没有左子树
      root.right = iter(pS + 1, pE, iS + 1, iE);
    } else {
      //
      let midIdx = iHash[midVal];
      let leftLength = midIdx - iS;
      root.left = iter(pS + 1, pS + leftLength, iS, iS + leftLength - 1);
      root.right = iter(pS + 1 + leftLength, pE, iS + 1 + leftLength, iE);
    }
    return root;
  }

  return iter(0, pLen - 1, 0, iLen - 1);
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let root = buildTree([5, 4, 3, 2, 6, 7, 8], [3, 4, 2, 5, 7, 6, 8]);
console.log(root);
let root2 = buildTree([5, 6, 7, 8], [5, 7, 6, 8]);
console.log(root2);
let root3 = buildTree([5, 4, 3, 2], [3, 4, 2, 5]);
console.log(root3);

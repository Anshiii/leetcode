/* 
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：
“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，
满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]


输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  /* root 向下遍历的到 p 和 q 的链路层中，相同的那个节点， 最近的则是最远的链路的那个 */

  let tem;
  function dfs(node, path = []) {
    if (!node) return node;
    path.push(node);
    if (node.val > p.val && node.val > q.val) {
      dfs(node.left);
    } else if (node.val < p.val && node.val < q.val) {
      dfs(node.right);
    }
    if (!tem) {
      tem = node;
    }
  }
  dfs(root);
  return tem;
};

function TreeNode(val) {
  if (val === null) return undefined;
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

let A = arrToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);

console.log(lowestCommonAncestor(A, { val: 2 }, { val: 4 }));

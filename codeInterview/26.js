/* 

输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof
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
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A) return false;
  if (!B) return false; // TRUE ? 递归自己

  /* 遍历找 b root 的位置 */

  /* 同步了起点之后 */
  function isBFromA(rootA, rootB) {
    if (!rootB) return true;
    if (!rootA) return false;
    if (rootA.val !== rootB.val) return false;
    return (
      isBFromA(rootA.left, rootB.left) && isBFromA(rootA.right, rootB.right)
    );
  }

  let que = [A];
  while (que.length) {
    let cur = que.shift();
    if (cur.val === B.val) {
      const tem = isBFromA(cur, B);
      if (tem) {
        return tem;
      }
    }
    cur.left && que.push(cur.left);
    cur.right && que.push(cur.right);
  }
  return false;
};

/* 数组 => 二叉树 */
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

let A = arrToTree([3, 4, 5, 1, 2]);
let B = arrToTree([4, 1]);
console.log(isSubStructure(A, B));

let c = arrToTree([1, 2, 3]);
let d = arrToTree([3, 1]);
console.log(isSubStructure(c, d));

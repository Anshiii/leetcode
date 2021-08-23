/* 
请实现一个函数按照之字形顺序打印二叉树，
即第一行按照从左到右的顺序打印，
第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [20,9],
  [15,7]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];
  if (!root) return result;
  let que = [root];

  while (que.length) {
    let tem = [],
      len = que.length,
      path = result.length;
    for (let i = 0; i < len; i++) {
      let cur = que.shift();
      if (path % 2 === 1) {
        tem.unshift(cur.val);
      } else {
        tem.push(cur.val);
      }
      cur.left && que.push(cur.left);
      cur.right && que.push(cur.right);
    }
    result.push(tem);
  }
  return result
};

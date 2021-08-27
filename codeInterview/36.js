/* 
输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。
要求不能创建任何新的节点，只能调整树中节点指针的指向。

 

为了让您更好地理解问题，以下面的二叉搜索树为例：

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

var treeToDoublyList = function (root) {
  if (!root) return root;
  let top = new Node(null),
    last;

  function def(node, par) {
    if (!node) return;

    def(node.left);

    if (last) {
      last.right = node;
      node.left = last;
    } else {
      top.right = node;
    }
    last = node;

    def(node.right);
  }
  def(root);
  last.right = top.right;
  top.right.left = last;
  return top.right;
};

var treeToDoublyList2 = function (root) {
  let top = new Node(null),
    result = [];

  function def(node) {
    if (!node) return;
    def(node.left);
    result.push(node);
    def(node.right);
  }
  def(root);
  let len = result.length;
  top.right = result[0];
  for (let i = 0; i < len; i++) {
    let next = i + 1 > len - 1 ? 0 : i + 1,
      last = i - 1 < 0 ? len - 1 : i - 1;
    result[i].right = result[next];
    result[i].left = result[last];
  }
  return top.right;
};

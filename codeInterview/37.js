/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function (root) {
  if (!root) return "";
  let resArr = [];
  let queue = [root];
  while (queue.length) {
    let current = queue.shift();

    if (current) {
      resArr.push(current.val);

      queue.push(current.left || null);
      queue.push(current.right || null);
    } else {
      resArr.push('');
    }
  }
  return resArr.join("$");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;
  let nodeValArr = data.split("$");
  let root = new TreeNode(nodeValArr[0]);
  let queue = [root],
    i = 1;

  while (queue.length) {
    let node = queue.shift();
    if (nodeValArr[i] !== "") {
      node.left = new TreeNode(nodeValArr[i]);
      queue.push(node.left);
    }
    i++;
    if (nodeValArr[i] !== "") {
      node.right = new TreeNode(nodeValArr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


let n2 = new TreeNode(0)
let n3 = new TreeNode(1)
let A = new TreeNode(-1)
A.left = n2
A.right = n3

let str = serialize(A)
console.log(str);
console.log(deserialize(str));

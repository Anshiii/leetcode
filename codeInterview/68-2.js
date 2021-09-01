var lowestCommonAncestor = function (root, p, q) {
  /* root 向下遍历的到 p 和 q 的链路层中，相同的那个节点， 最近的则是最远的链路的那个 */

  let pPath = [],
    qPath = [];
  function dfs(node, path = []) {
    if (!node) return;
    path.push(node);

    // if (node === p) {
    if (node === p) {
      pPath = [...path];
    }
    if (node === q) {
      // if (node === q) {
      qPath = [...path];
    }
    dfs(node.left, path);
    dfs(node.right, path);
    path.pop(node);
  }

  dfs(root);
  let minLen = Math.min(pPath.length, qPath.length);
  for (let i = minLen - 1; i >= 0; i--) {
    if (pPath[i] === qPath[i]) {
      return pPath[i];
    }
  }
};

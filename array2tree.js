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

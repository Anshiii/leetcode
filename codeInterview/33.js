/* 
输入一个整数数组，判断该数组是不是某[二叉搜索树]的后序遍历结果。
如果是则返回 true，否则返回 false。
假设输入的数组的任意两个数字都互不相同。

后续遍历 左右中
*/

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  /* 搜索树，left<mid<right , 后序遍历 左右中  , 左边比中小，右边比中大*/
  let len = postorder.length;

  /* 空数组,  */
  if (!len) return true;

  function iter(s, e) {
    if (e <= s) return true;
    let midVal = postorder[e],
      rightStart;

    for (let i = s; i <= e; i++) {
      if (rightStart !== undefined) {
        if (postorder[i] < midVal) {
          return false;
        }
      }

      if (rightStart === undefined && postorder[i] > midVal) {
        rightStart = i;
      }
    }

    if (rightStart === undefined) {
      /* 没有右子树 */
      return iter(s, e - 1);
    } else {
      return iter(s, rightStart - 1) && iter(rightStart, e - 1);
    }

    // rightStart - E -1
  }
  return iter(0, len - 1);
};

console.log(verifyPostorder([1, 3, 2, 5])); //TRUE
console.log(verifyPostorder([1, 3, 2, 6, 5])); //TRUE
console.log(verifyPostorder([1, 6, 3, 2, 5])); // false
console.log(verifyPostorder([6, 5])); // TRUE
console.log(verifyPostorder([6])); // TRUE

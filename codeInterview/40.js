/* 

输入整数数组 arr ，找出其中最小的 k 个数。
例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  // 快排练习
  // n logn

  /* 任意选择一个数字， 按比他大/小 分成前后两部分，一轮遍历确定该数位置， n * logn */
  function swap(idxA, idxB) {
    [arr[idxB], arr[idxA]] = [arr[idxA], arr[idxB]];
  }
  function find(start, end) {
    /* k 之后根据题目不用排序了 */
    if (start >= k) return;
    if (start >= end) return;
    let tar = arr[end],
      posi = start;
    for (let i = start; i < end; i++) {
      if (arr[i] < tar) {
        swap(i, posi);
        posi++;
      }
    }
    swap(end, posi);
    find(start, posi - 1);
    find(posi + 1, end);
  }

  find(0, arr.length - 1);
  return arr.slice(0, k);
};

[0, 0, 1, 2, 4, 2, 2, 3, 1, 4];
8;
console.log(getLeastNumbers([0, 0, 1, 2, 4, 2, 2, 3, 1, 4], 8));

//剑指 Offer II 039. 直方图最大矩形面积

/* 单调栈法 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let stack = [],
    len = heights.length,
    result = 0;

  for (let i = 0; i < len; i++) {
    const element = heights[i];
    while (stack.length) {
      let lastIdx = stack[stack.length - 1];
      let lastVal = heights[lastIdx];
      if (element < lastVal) {
        // 计算高度为 lastVal 的最大矩形
        // 这里因为刚好记录了 比当前高度小的柱的下标
        let height = lastVal,
          width = i;
        stack.pop();
        if (stack.length) {
          width = i - stack[stack.length - 1] - 1;
        }
        result = Math.max(height * width, result);
      } else {
        break;
      }
    }
    stack.push(i);
  }

  /* 计算一直递增的情况 */
  let j = stack[stack.length - 1] + 1;
  while (stack.length) {
    let lastIdx = stack[stack.length - 1],
      height = heights[lastIdx],
      width = j;

    stack.pop();
    if (stack.length) {
      width = j - stack[stack.length - 1] - 1;
    }
    result = Math.max(height * width, result);
  }
  return result;
};

/* 暴力法 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea2 = function (heights) {
  let len = heights.length,
    result = -1;

  for (let i = 0; i < len; i++) {
    let current = heights[i];
    // 当前块的面积，
    result = Math.max(result, current);
    let minHeight = current;
    for (let j = i + 1; j < len; j++) {
      let end = heights[j];
      minHeight = Math.min(minHeight, end);
      result = Math.max(result, minHeight * (j - i + 1));
    }
  }
  return result;
};

/* 分治法 */
/* 
找到最短的柱子，最大面积要么是 高度为 min ，宽度为 参数长度；要么就是在最短柱子的左边，或者右边。 故此分解问题

*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea3 = function (heights) {
  let len = heights.length,
    result = -1;

  function subQues(l, r) {
    if (l > r) {
      return -1;
    }
    if (l === r) {
      return heights[l];
    }

    /* l 和 r 差 1 的情况 */
    if (l + 1 === r) {
      return Math.max(
        heights[l],
        heights[r],
        2 * (heights[l] > heights[r] ? heights[r] : heights[l])
      );
    }

    let minHeightIdx = l;
    for (let i = l + 1; i <= r; i++) {
      if (heights[minHeightIdx] > heights[i]) {
        minHeightIdx = i;
      }
    }

    let midArea = heights[minHeightIdx] * (r - l + 1);
    let leftArea = subQues(l, minHeightIdx - 1);
    let rightArea = subQues(minHeightIdx + 1, r);

    return Math.max(midArea, leftArea, rightArea);
  }

  result = subQues(0, len - 1);
  return result;
};

largestRectangleArea([5, 6, 7, 8]);

largestRectangleArea([2, 1, 5, 6, 2, 3]);

largestRectangleArea([0, 0, 0]);

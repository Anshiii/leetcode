/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */

const f = (list)=>{
    return {

    }
}
var lastStoneWeight = function (stones) {
  const maxHeapStones = f(stones);
  while (stones.length > 1) {
    const y = maxHeapStones[0],
      x = maxHeapStones[1];
    if (x === y) {
      maxHeapStones.del(x, y);
    } else {
      maxHeapStones.del(x);
      y = y - x;
    }
  }
  return stones.shift();
};
// @lc code=end

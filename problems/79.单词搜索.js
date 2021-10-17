/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let len = word.length,
    m = board.length;
  if (!m) return false;
  let n = board[0].length,
    direction = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
  // 遍历找起点，搜索

  function search(x, y, letterIdx) {
    if (letterIdx === len) return true;
    if (x < 0 || x >= m || y < 0 || y >= n || !board[x][y]) return false;
    if (board[x][y] !== word[letterIdx]) return false;
    board[x][y] = false; // 使用过的字母，标记
    let tem = false;
    for (let index = 0; index < direction.length; index++) {
      const nX = x + direction[index][0],
        nY = y + direction[index][1];
      if (search(nX, nY, letterIdx + 1)) {
        tem = true;
        break;
      }
    }
    board[x][y] = word[letterIdx];
    return tem;
    // X Y 不过边界，元素存在，判断 ok ，则深入
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (search(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end
exist(
  [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  "ABCCED"
);

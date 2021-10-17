/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let result = [];
  let len = words.length,
    m = board.length;
  if (!m) return result;
  let n = board[0].length,
    direction = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
  if (!n) return result;

  //字母起始单词表
  const wordMap = {};

  function search(x, y, letterIdx, word) {
    if (letterIdx === word.length) return true;
    if (x < 0 || x >= m || y < 0 || y >= n || !board[x][y]) return false;
    if (board[x][y] !== word[letterIdx]) return false;
    board[x][y] = false; // 使用过的字母，标记
    let tem = false;
    for (let index = 0; index < direction.length; index++) {
      const nX = x + direction[index][0],
        nY = y + direction[index][1];
      if (search(nX, nY, letterIdx + 1, word)) {
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
      for (let k = 0; k < words.length; k++) {
        const oneWord = words[k];
        if (wordMap[oneWord] === true) continue;
        const isIn = search(i, j, 0, oneWord);
        if (isIn) {
          wordMap[oneWord] = true;
          result.push(oneWord);
        }
      }
    }
  }
  return result;
};
// @lc code=end

findWords(
  [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
  ],
  ["oath", "eat"]
);

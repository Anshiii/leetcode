/**
 * @param {string} s
 * @return {number[][]}
 */
// 刚好循环结束
var largeGroupPositions = function (s) {
  const result = [];
  let count = 1,
    len = s.length;
  for (var i = 0; i < len; i++) {
    // 预先一步判断
    if (i === len - 1 || s[i] !== s[i + 1]) {
      if (count >= 3) {
        result.push([i + 1 - count, i]);
      }
      count = 1;
    } else {
      count++;
    }
  }
  console.log(JSON.stringify(result));
  return result;
};

largeGroupPositions("aaazbbbbbzccc");

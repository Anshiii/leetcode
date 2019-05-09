/* 
输入: S = "ababcbacadefegdehijhklij"
输出: [9,7,8]
解释:
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。

注意:
S的长度在[1, 500]之间。
S只包含小写字母'a'到'z'。
 */
/**
 * @param {string} S
 * @return {number[]}
 */

var partitionLabels = function(S) {
  let result = [],
    map = {}; // number []
  for (let i = 0, len = S.length; i < len; i++) {
    let cur = S[i];
    let idx = map[cur];
    /* 如果之前存在这个字母，找到之前字母在 result 队列的 下标rsIdx； */
    if (idx != undefined) {
      let offset = idx + 1; //## idx 为0 实际是第1个数。
      for (let rsIdx = 0, len = result.length; rsIdx < len; rsIdx++) {
        if (offset > result[rsIdx]) {
          offset = offset - result[rsIdx];
        } else {
          /* 合并 rsIdx 及其之后的项 */
          result = result.slice(0, rsIdx);
          result.push(i - idx + offset);
          break;
        }
      }
    } else {
      /* 不存在这个字母，单独一个队列,加入队列中 */
      result.push(1);
      map[cur] = i;
    }
  }
  console.log(result);
  return result;
};

/* 记录的解法 */
var partitionLabels = function(S) {
  var arr = [];
  while (S.length) {
    var end = S.lastIndexOf(S[0]); //第一个包围圈的位置；
    for (var i = 0; i <= end; i++) {
      var nowend = S.lastIndexOf(S[i]);
      /* 如果之前的字母被第i个字母包围，包围圈改为第i个字母的  */
      nowend > end ? (end = nowend) : 1;
    }
    /* end 是 下标，作为数字计算时需要加1 */
    arr.push(end + 1);
    /* 剔除前i个字母，此时的 i = end +1 */
    S = S.slice(i);
  }
  return arr;
};

// partitionLabels("abacdvcbkkkl");
partitionLabels("ababcbacadefegdehijhklij");

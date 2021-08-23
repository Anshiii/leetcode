/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length < 1) return "";
  /* 1. 优化 left 和 right 不从 0开始
    left 从第一个有效字母开始，right 到最后一个有效字母结束
  */
  const mark = mapT(t),
    map = {};
  let left = 0,
    right = 0, // 包左不包右
    len = s.length,
    result = [left, right];

  /* end 怎么界定比较好... */
  while (right < len) {
    const cur = s[right];
    if (mark[cur] !== undefined) {
      map[cur] = map[cur] ? ++map[cur] : 1;
    }

    // 如果符合条件
    while (Object.keys(mark).every((key) => map[key] >= mark[key])) {
      result = minResult(result, [left, right + 1]);
      map[s[left]] && map[s[left]]--;
      // console.log(map, s[left]);
      left++;
      continue;
    }
    right++;
  }

  let string = "";
  while (result[0] < result[1]) {
    string += s[result[0]];
    result[0]++;
  }
  console.log(string);
  return string;
};

function minResult(arr1, arr2) {
  const len1 = arr1[1] - arr1[0];
  if (len1 === 0) return arr2;
  const len2 = arr2[1] - arr2[0];

  return len1 < len2 ? arr1 : arr2;
}

function mapT(t) {
  let map = {},
    len = t.length;
  for (let i = 0; i < len; i++) {
    map[t[i]] = map[t[i]] ? ++map[t[i]] : 1;
  }
  return map;
}
// @lc code=end

minWindow("ADOBECODEBANC", "ABC");
minWindow("ADOBECODEBANC", "df");
minWindow("AD", "ABC");
minWindow("a", "aa");

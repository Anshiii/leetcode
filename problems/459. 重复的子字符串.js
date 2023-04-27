/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * abcabcabc
 * 000123456
 * s=s's's'
 * s+s=s's's's's's'
 * s-s's's's's+
 * s-ss's+
 *
 *
 */

// 没有证明的解法
var repeatedSubstringPattern = function (s) {
  let s2 = (s + s).slice(1, s.length * 2 - 1);

  function includes(s, p) {
    const next = [0, 0];
    let prefixLen = 0;
    for (let i = 1; i < p.length; ) {
      if (p[prefixLen] === p[i]) {
        prefixLen++;
        i++;
        next.push(prefixLen);
        continue;
      }
      if (prefixLen === 0) {
        next.push(0);
        i++;
        continue;
      }
      prefixLen = next[prefixLen];
    }

    for (let i = 0, j = 0; i < s.length; ) {
      if (s[i] === p[j]) {
        i++;
        j++;
        if (j === p.length) {
          j = next[j];
          return true;
        }
        continue;
      }
      if (j === 0) {
        i++;
        continue;
      }
      j = next[j];
    }

    return false;
  }
  return includes(s2, s)
//   return s2.includes(s);
};


repeatedSubstringPattern("abaababaab");
repeatedSubstringPattern("aba");
repeatedSubstringPattern("abaaba");

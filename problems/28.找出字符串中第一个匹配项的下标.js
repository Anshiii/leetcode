/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/**
 *
 * aabaac
 * 010120
 * -1 0 1 0
 */
var strStr = function (haystack, needle) {
  const next = [-1, 0];
  let prefixLen = 0;
  for (let i = 1; i < needle.length; ) {
    if (needle[i] === needle[prefixLen]) {
      prefixLen++;
      next.push(prefixLen);
      i++;
      continue;
    }
    if (prefixLen === 0) {
      next.push(0);
      i++;
      continue;
    }
    prefixLen = next[prefixLen];
  }
  console.log("---anshi---next", next);

  for (let i = 0, j = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] != needle[j]) {
      j = next[j];
    }
    if (haystack[i] === needle[j]) {
      j++;
      if (j === needle.length) {
        return i - j + 1;
      }
      continue;
    }
  }
  return -1;
};

console.log(strStr("bba", "ba"));
console.log(strStr("aasssaabaac", "aabaac"));
console.log(strStr("aasssaabaac", "sa"));

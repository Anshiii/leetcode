/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  const numberMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  // 组合？ 一个数字代表一位，任选这个数字表示的其中一位字母，最终生成的结果就是组合？
  let path = [];
  let result = [];

  function backtrace(index) {
    if (index >= digits.length) {
      result.push(path.join(""));
      return;
    }

    let cur = digits[index];
    for (let i = 0; i < numberMap[cur].length; i++) {
      path.push(numberMap[cur][i]);
      backtrace(index + 1);
      path.pop();
    }
  }

  backtrace(0);
  return result;
};

letterCombinations("23");
letterCombinations("");
letterCombinations("2");

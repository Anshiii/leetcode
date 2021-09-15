/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let max = Math.pow(10, n) - 1, res = []

    for (let index = 1; index <= max; index++) {
        res.push(index)
    }
    return res
};
console.log(printNumbers(2));
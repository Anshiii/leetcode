/* 
输入一个字符串，打印出该字符串中字符的所有排列。

 

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    let result = [];

    // S 个字符都能作为第一个

    function iter(current = '', restList = []) {
        if (restList.length <= 1) {
            result.push(current + restList[0])
            return
        }
        let map = {}
        for (let index = 0; index < restList.length; index++) {
            const element = restList[index];
            if (map[element]) continue
            map[element] = 1
            iter(current + element, [...restList.slice(0, index), ...restList.slice(index + 1)])
        }
    }

    iter('', s.split(''))
    return result
};

// console.log(permutation("abc"));
// console.log(permutation("abb"));
console.log(permutation("a"));
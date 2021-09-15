/*  */


var strToInt = function (str) {
    let num = parseInt(str), res = num
    if (isNaN(num)) return 0
    /* 
    那么其数值范围为 [−231,  231 − 1]。
    如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。
    
    */
    if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
    if (num < -Math.pow(2, 31)) return -Math.pow(2, 31)
    return res
};

console.log(strToInt("   -42"));
console.log(strToInt("words and 987")); // 0
console.log(strToInt("-91283472332192918312931231"));
console.log(strToInt("4193 with words"));
console.log(strToInt("912"));
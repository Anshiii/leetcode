/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
    let max = logs[0][1], maxId = logs[0][0]
    for (let i = 1; i < logs.length; i++) {
        let result = logs[i][1] - logs[i - 1][1];
        if (result > max
            || (logs[i][0] < maxId && result === max)) {
            max = result;
            maxId = logs[i][0]
        }
    }
    return maxId
};

hardestWorker(65,[[36,3],[1,5],[12,8],[25,9],[53,11],[29,12],[52,14]])
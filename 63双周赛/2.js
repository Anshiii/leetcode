/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
    // 遍历一次，找出 A B 最多操作次数

    let len = colors.length, allA = 0, allB = 0;

    let temA = 0, temB = 0;
    for (let i = 0; i < len; i++) {
        const element = colors[i];
        if (element === 'A') {
            if (temB !== 0) {
                if (temB > 2) {
                    allB += temB - 2;
                }
                temB = 0
            }
            temA++
        } else {
            if (temA !== 0) {
                if (temA > 2) {
                    allA += temA - 2;
                }
                temA = 0
            }
            temB++
        }
    }
    if (temB !== 0) {
        if (temB > 2) {
            allB += temB - 2;
        }
        temB = 0
    }
    if (temA !== 0) {
        if (temA > 2) {
            allA += temA - 2;
        }
        temA = 0
    }

    return allA > allB
};

winnerOfGame("AA")
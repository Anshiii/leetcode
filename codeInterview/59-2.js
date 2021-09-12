var MaxQueue = function () {
    this.data = []
    this.max = [-1]
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    if (!this.max.length) return -1

    return this.max[0]
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {

    this.data.push(value)
    // 清空比 value 小的，push(value)
    while (value > this.max[this.max.length - 1]) {
        this.max.pop()
    }
    this.max.push(value)

    // O(n) 操作
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    if (!this.data.length) return -1
    let shiftOneVal = this.data[0]
    if (shiftOneVal === this.max[0]) {
        this.max.shift()
    }
    this.data.shift()
    return shiftOneVal
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

var obj = new MaxQueue()
var param_1 = obj.max_value()
obj.push_back(12)
console.log(obj.max_value());

obj.push_back(9)
console.log(obj.max_value());

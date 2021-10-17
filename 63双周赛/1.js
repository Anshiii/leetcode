/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    seats.sort((a, b) => a - b)
    students.sort((a, b) => a - b)
    let count = 0, len = seats.length;
    for (let i = 0; i < len; i++) {
        let seat = seats[i];
        let peo = students[i]

        count += Math.abs(seat - peo)
    }

    return count
};

minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])
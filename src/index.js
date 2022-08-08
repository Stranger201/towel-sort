// You should implement your task here.

module.exports = function towelSort(matrix) {
    let ans = [];
    if (typeof matrix == "undefined") {
        return [];
    } else {
        for (i = 0; i <= matrix.length; i++) {
            if (i % 2 === 0) {
             ans.concat(matrix[i])
            } else {
             ans.concat(matrix[i].reverse())
            }
        }
    }
        return ans;
}

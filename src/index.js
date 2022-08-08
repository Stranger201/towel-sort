// You should implement your task here.

module.exports = function towelSort(matrix) {
    let ans = [];
    let ret = [];
    if (typeof matrix == "undefined") {
        return [];
    } else {
        for (i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
             ans.push(matrix[i])
            } else {
             ans.push(matrix[i].reverse())
            }
        }
    };
    for(let k in ans ){
     ret =  ret.concat(ans[k])
    }
        return ret;
}

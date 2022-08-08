
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let ans = [];
  let res = [];
  for(i= 0; i <= matrix.length; i++){
if(i % 2 === 0){
    ans.concat(matrix[i])
}else{
    ans.concat(matrix[i].reverse())
}    
  }
  // for(key in ans){
  //   res = res.concat([ans[key]]);
  // }
  return ans;
}

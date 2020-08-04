// 5!

// function mul(n) {
  // n 的阶乘
  // n! = n * (n-1)!

  // var num = 1
  // for(var i = 1; i < n; i++) {
  //   num *= i
  // }
  // return num
//   if(n == 1) {
//     return 1             //2.找出口
//   }
//   return n * mul(n -1)  //1. 找规律
// }
// console.log(mul(5));




//  斐波那契数列


// fb(n) = fb(n -1) + fb(n-2)
function fb(n) {
  if(n == 1 || n == 2){
    return 1
  }
  return fb(n - 1) + fb(n -2)
}
console.log(fb(9));
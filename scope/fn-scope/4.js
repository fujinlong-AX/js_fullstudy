// 块级作用域

// for (var i = 0; i < 10;i++){  // i 会污染到整个函数作用域当中
//   console.log(i);
// }
// console.log(i);


// {
//   let j
//   for (j = 0; j < 10;j++){  // i 会污染到整个函数作用域当中
//     console.log(j);
//   }
// }
// console.log(j);


// var foo = true,
//     bar = 10
// if(foo){
//   var bar = 3
// }
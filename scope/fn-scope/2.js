// 隐藏内部实现

// var b

// function foo(a) {
//   b = a + bar(a * 2)
// }

// function bar(a) {
//   return a -1
// }
// console.log(foo(2));



// 规避冲突
function foo() {
  
  function bar(a) {
    i = 3
    console.log(a + i);
  }

  for (var i = 0; i < 10; i++) {
    bar(i * 2)
    
  }
}
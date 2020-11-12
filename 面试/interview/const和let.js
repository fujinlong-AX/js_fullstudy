// 全局作用域中， 用const 和 let 声明的变量在哪里？ 怎么获取？

var a = 123
function fn() {}

let b = 456
console.log(window.b);

// 查找声明变量的阶段，会把let声明的变量放到词法环境当中，而var声明的则在作用域当中

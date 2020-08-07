// function identify(context) {
//   return context.toUpperCase()
// }

// function speak(context) {
//   let greeting = "Hello, I'm" + identify(context)
//   console.log(greeting);
// }

// speak('me')



// function identify() {
//   return this.name.toUpperCase()
// }

// function speak() {
//   let greeting = "Hello, I'm" + identify.call(this)
//   console.log(greeting);
// }

// let me = {
//   name: 'wn'
// }

// speak('me')



//  this所处的词法作用域在哪里生效了，this作用域就指向哪里

// function foo() {
//   let person = {
//     name: 'wn',
//     age: 18
//   }
//   console.log(this.person.name);
// }

// function bar() {
//   let person = {
//     name: 'wn',
//     age: 18
//   }
// }
// bar()


// function foo() {
//   // "use strict"
//   console.log(this.a);
// }

// var a = 2;
// (function () {
//   "use strict"
//   foo()   //  严格模式下的foo的调用，与位置无关
// })



// function foo() {
//   console.log(this.a);
// }

// var obj = {
//   a: 2,
//   foo: foo
// }
// obj.foo()



// function foo() {
//   console.log(this.a);
// }
// var obj = {
//   a: 2,
//   foo:foo
// }

// var bar = obj.foo
// var a = 
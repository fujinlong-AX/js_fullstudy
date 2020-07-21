// 数组的解构
// let a = 1
// let b = 1
// let c = 1

// let [a, b, c] = [1, 2, 3]

// let [foo, [[bar], baz]] = [1, [[2], 3]]
// console.log(bar)



// let[, , third] = ['a','b','c']

// let [x, y] =[1, 2, 3]

// let [head, ...tail] = [1, 2, 3, 4]

// let [a, b, ...c] = ['hello']




// let [x, y = 'aaa'] = ['a' , undefined] // undefined 在解构的时候赋值了undefined，并不会成功
// console.log(x, y)


// let [x, y = 'aaa'] = ['a' , null]
// console.log(x, y)


// let [x =1, y = x] = [2, 3]
// console.log(x, y)





// 对象的解构

// let {foo, bar} = {foo:'aaa', bar:'bbb'}
// console.log(foo, bar)



// let {foo: baz} = {foo:'a', bar:'bbb'}
// // foo 是匹配模式， baz才是变量
// console.log(baz)


// let obj = {
//     name: '子城',
//     desc:{
//         alone: false,
//         age: 20,
//         sanwei:[50,100,120]
//     }
// }

// let {name, desc:{alone,age,sanwei:[x,y,z]}} = obj
// console.log(name, alone,age,x,y,z)



// 字符串的解构
// let [a, b, c ,d,e] = 'hello'
// // console.log(a,b,c,e,d)

// let {length: len} = 'hello'
// console.log(len)



//  数值和布尔值的解构赋值
let {toString: s} = 123
console.log(s === Number.prototype.toString)


console.log(num.toString())

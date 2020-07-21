// for(let i = 0; i < 3; i++)  {  //父作用域
//     let i = 'abc'        // 子作用域
// }



// 暂时性死区
var tmp = 123

if(true){
    tmp = 'abc'
    console.log(tmp)
}


// var a ='a'
// var a = 'aa'
// console.log(a)


// let a ='a'
// let a = 'aa'
// console.log(a)












//  -----------------------------------------------------------------


// const num = 1234

// num = 1000

// console.log(num)



// if(true){
//     console.log(age)
//     const age = 18
// }


const message = 'hello world'
const message = 'hello'
console.log(message)






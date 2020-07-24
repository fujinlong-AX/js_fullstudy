// set 类似于数组， 但是不一样的地方是se这种数据结构内部的成员是唯一值

// const s = new Set() //  类数组
// // const arr = new Arry()
// console.log(s)

// let arr = [1,3,,2,6,1,5,4]

// arr.forEach((x) => {
//   // console.log(x)
//   s.set(x)
// })
// console.log(s)



// const set = new Set([1,2,3,4,4,5,5])
// console.log(set.size)



// // 数组去重
// let arr = [2,3,4,1,3,2,5]
// console.log([...new Set(arr)])



// //字符串去重
// console.log([...new Set('abcdab')])

// 5 == '5'
// const set = new Set([])
// let a = {name:'蜗牛'}
// let b = a
// set.add(a)
// set.add(b)
// console.log(set)


// const set = new Set()
// // set.add(1)
// // set.add(2)
// // set.add(3)
// set.add(1).add(2).add(3)
// // set.delete(2)
// set.clear()
// console.log(set)




// Array.from(['a', 'b','c']).array.forEach(e => { // 
//   console.log(e)
// });



// const set = new Set([1,2,3,4])
// const array = Array.from(set)
// array.forEach(e => {
//   console.log(e)
// })

// // 数组去重
// // 去除数组重复成员
// function dedupe(array) {
//   return console.log(Array.from(new Set(array)));
// }

// dedupe([1,1,2,3]);

// //  set 遍历
// // let set = new Set(['red', 'green', 'blue'])

// // keys()是set结构中返回键名的遍历器

// for(let item of set.keys()){
//   console.log(item)
// }


// for(let ){
  
// }
// entries()是set结构中
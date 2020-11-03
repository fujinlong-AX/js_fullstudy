// filter是一个能够过滤掉数组中指定类型元素的api
// filter通过一个回调函数callback来过滤一个数组并返回一个新的数组，并且不会改变原数组。
// filter的第二个参数是执行callback时，用于的this。如何没有手动添加这个参数，在非严格模式下，this指向全局，在严格模式下，this指向的是undefined
// callback，一共有三个参数，第一个是需要做处理的数组中的每一项，第二个是当前元素的索引，第三项是需要做处理的数组

// function isBigEnough(value) {
//   return value >= 10
// }
// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough)


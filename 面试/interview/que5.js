// Object.prototype.toString.call()      //  instanceof     // Array.isArray
// 之间的区别和优缺点


// 1. instanceof 只能判断对象类型，但是所有的对象类型instanceof Object都为true
// 2. Object.prototype.toString.call() 除了太长没有缺点
// 3. Array.isArray() 在检测Array实例时，比instanceof更优，因为Array.isArray()可以检测iframes

// [] instanceof Object

// [Object type]
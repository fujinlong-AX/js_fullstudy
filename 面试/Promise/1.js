/*
用 promise 实现以下功能。
具体： fn1和fn2都是异步函数，f1、fn2同时执行，并且fn1、fn2的结果是 fn3的参数。当fn1或者fn2发生错误时，fn3照常执行，此时的参数为空。
*/
eg:
let fn1 = async() => {
 
    // 发送请求
    const data = await sendRquest1(1000);
    return data;
}
let fn2 = async() => {
 
    // 发送请求
    const data = await sendRquest2(2000);
    return data;
}

let fn3 = (...args) => {
  console.log(args);
} 

Promise.prototype.myAll = function(promiseArr) {
  return new Promise((resolve, reject) => {
    let c = 0, len = promiseArr.length, res = [];
    for(let i = 0; i < len; i++) {
      promiseArr[i].then((r) => {
        c++
        res[i] = r
        if( c === len) {
          resolve(res)
        }
      })
      .catch(err => {
        c++
        res[i] = null
        if( c === len) {
          resolve(res)
        }
      })
    }
  })
}

Promise.any([fn1(), fn2()])
Promise.allSettled([fn1(), fn2()])
Promise.all([fn1(), fn2()])
function sendRquest1(t) {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve(t)
   }, t)
  })
 }

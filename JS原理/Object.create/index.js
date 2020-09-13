// Object.create 的实现原理

let a = { b: 1}

Object.create(a)

function create(OBJ) {
  // let obj = {
  //   __proto__: OBJ.prototype
  // }
  // OBJ.call(obj)
  // return obj
  if (typeof obj !== 'object') {
    throw TypeError
  }
  function Ctor() {}
  Ctor.prototype = obj
  let o = new Ctor()
  return o
}
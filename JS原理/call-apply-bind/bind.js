Function.prototype.mybind = function (context) {
  if (typeof this !== 'function') {
    // 调用call的不是函数
    throw new TypeError('Bind must be called a function')
  }
  // 拿到参数
  // let arg = [...arguments].slice(1)
  const arg = Array.prototype.slice.call(arguments, 1)
  // 保存this
  const self = this
  // 定义一个空函数，用来保存原函数的原型
  const original = function () {}
  // 绑定的函数
  const bound = function () {
    // this instanceof original,判断是否用new来调用bound
    return self.apply(
      this instanceof original ? this : context,
      args.contact(Array.prototype.slice.call(arguments))
    )
  }
  if (this.prototype) {
    original.prototype = this.prototype
  }
  // 修改绑定函数的原型指向
  bound.prototype = new original()
  return bound
}

fn.mybind(obj)
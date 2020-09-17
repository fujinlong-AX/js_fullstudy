// 栈， 线性结构， 特点：在某一端添加或删除数据，遵循先进后出的原则

class Stack {
  constructor() {
    this.stack = []
  }
  push(item) {
    this.stack.push(item)
  }
  pop() {
    this.stack.pop()
  }
  peak() {
    return this.stack[this.getCount() - 1]
  }
  getCount() {
    return this.stack.length
  }
  isEmpty() {
    return this.getCount === 0
  }
}

let stack = new Stack() // { stack: []}







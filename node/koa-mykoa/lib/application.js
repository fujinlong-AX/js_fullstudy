let http = require('http')
let EventEmitter = require('events')
let context = require('./context'); // 上下文
let require = require('./require');
let response = require('./response');

class Koa extends EventEmitter {
  constructor() {
    super()  // 让他的子子孙孙都能继承他的方法
    this.fn
    this.context = context
    this.request = this.request
    this.response = response
  }

  use(fn) {
    this.fn = fn // 用户使用use方法的时候，把回调函数赋值给this.fn
  }

  createContext(req, res) { // 核心方法，创建ctx
    const ctx = Object.create(this.context)  // 百度了解一下这个方法
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)
    // 交叉赋值
  }

  handleRequest(req, res) {
    let ctx = this.createContext(req, res)
    this.fn(ctx)
    res.end(ctx.body)
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}

module.exports = Koa
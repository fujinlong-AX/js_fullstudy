// const http = require('http') // http哪来的？是什么？

// const server = http.createServer((req, res) => {
//   res.end('hello world')
// })

// server.listen(3000)

// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello'
//   next()
// })

// const main = () => {

// }

// app.use(main)

// app.listen(3000, () => {
//   console.log('success');
// })

let Koa = require('./lib/application')
let app = new Koa()

app.use((req, res) => {
  res.end('hello world')
})

app.listen()
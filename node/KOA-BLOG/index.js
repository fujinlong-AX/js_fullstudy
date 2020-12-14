const koa = require('koa')
const  config = require('./config/default.js')
const app = new koa()

app.use((ctx) => {
  ctx.body = 'hello'
})

app.listen(config.port, () => {
  console.log('3000端口已启动');
})
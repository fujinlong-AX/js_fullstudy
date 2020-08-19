const Koa = require('koa');
const app = new Koa()

const main = ctx => {
  let time = new Date
  ctx.response.body = `${ctx.request.url}-${ctx.request.method}----${new Date().getTime()}`

}

app.use(main)
app.listen(3000)
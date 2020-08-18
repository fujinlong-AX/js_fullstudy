const Koa = require('koa');

const app = new Koa() // 定义一个新的koa实例

const main = ctx => {
  if (ctx.request.url !== '/'){
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Index Page</a>'
  }else {
    ctx.response.body = 'hello word'
  }
}

app.use(main)
app.listen(3000,() => {
  console.log('项目启动ing');
})
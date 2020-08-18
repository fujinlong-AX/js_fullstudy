// 引入依赖 commomJS
const Koa = require('koa');

const app = new Koa() // 定义一个新的koa实例

//ctx.request.accepts检查http请求的accept的内容的
//Accept属于请求头。代表客户端希望接受的数据类型。跟Content类
const main = ctx => {
  if (ctx.request.accepts('xml')) {
    ctx.responese.type = 'xml'
    ctx.responese.body = '<data>Hello World</data>'
  }else if (ctx.request.accepts('html')){
    ctx.responese.type = 'html'
    ctx.responese.body = '<p>Hello World</p>'
  }else if (ctx.request.accepts('json')){
    ctx.responese.type = 'json'
    ctx.responese.body = '{data: Hello World}'
  }else{
    ctx.responese.type = 'text'
    ctx.responese.body = 'Hello World'
  }
}
app.use(main)

app.listen(3000,() => {
  console.log('项目启动ing');
})
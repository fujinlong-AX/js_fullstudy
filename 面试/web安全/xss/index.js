const Koa = require('koa');
const KoaView = require('koa-views');
const router = require('koa-router')();
const app = new Koa();
const path = require('path');
const viewPath = path.join(__dirname, './views');
// ejs 约等于 vue template
app.use(KoaView(viewPath, {
  extension: 'ejs'
}))

// html css js: 如果我们不想让他们当做可执行执行，就转义他们
// html 转义（过滤）： https://dev.w3.org/html5/html-author/charref
// js 转义：\x unicode码点16进制表现形式
// cookie: http only 
// CSP: 内容安全策略


router.get('/', async (ctx) => {
  let xss = `
   <h2>xss</h2>
   <img onerror="alert(123);" src="xxx" />
  `
  await ctx.render('xss', {
    xssCode: xss
  })
})
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8080, () => {
  console.log(8080);
})

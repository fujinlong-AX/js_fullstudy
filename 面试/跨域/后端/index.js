// 当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域
const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  // ctx.router available
});

app
  .use(router.routes())
  .use(router.allowedMethods());

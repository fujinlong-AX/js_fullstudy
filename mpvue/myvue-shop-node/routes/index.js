const router = require('koa-router')({
  prefix: '/lm'
})
const controllers = require('../controller/index')
  // 从数据库获取数据返回给前端
router.get('/index/index',  controllers.home.index)

module.exports = router
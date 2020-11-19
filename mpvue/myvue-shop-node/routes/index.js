const router = require('koa-router')({
  prefix: '/lm'
})
const controllers = require('../controller/index')

  // 从数据库获取数据返回给前端
  // 首页相关的接口
router.get('/index/index',  controllers.home.index)

  // 搜索相关的接口
router.get('/search/indexaction', controllers.search.index.indexAction)
router.post('/search/addhistoryaction', controllers.search.index.addHistoryAction)
router.post('/search/clearhistoryAction', controllers.search.index.clearHistoryAction) // 清除搜索历史
router.get('/search/helperaction', controllers.search.index.helperAction) // 搜索提示

// 商品详情
router.get('/goods/detailaction', controllers.goods.index.detailAction)

// 收藏相关的接口
router.post('/collect/addcollect', controllers.collect.index.addCollect)

module.exports = router
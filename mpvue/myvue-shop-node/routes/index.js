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

// 订单相关的接口
router.post('/order/submitAction', controllers.order.index.submitAction)
router.get('/order/detailAction', controllers.order.index.detailAction)

// 购物车相关的接口
router.post('cart/addCart', controllers.cart.index.addCart)

// 收货地址相关的接口
router.get('/address/getListAction', controllers.address.index.getListAction)
router.get('/address/detailAction', controllers.address.index.detailAction)
module.exports = router
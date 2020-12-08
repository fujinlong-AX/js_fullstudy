const { mysql } = require('../../mysql')

// 添加或者更新收货地址
async function getListAction(ctx) {
  const openId = ctx.query.openId
  const addressList = await mysql('nideshop_address').where({
    'user_id': openId
  }).orderBy('is_default', 'desc').select()
  ctx.body = {
    data: addressList
  }
}
module.exports = {
  getListAction
}
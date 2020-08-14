// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'wx-db-3pr8v'

cloud.init()
const db = cloud.database({env})
// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID
                                                // where是在当前数据库中查找
  let groupList = await db.collection('user-group').where({
    userId: openId
  }).get()
  let returnResult = []
  for (let item of groupList.data) {
    const oneGroup = await db.collection('group').where({
      id: item.groupId,
      deleted: false
    }).get()
    if (oneGroup.data.length > 0){
      returnResult.push(oneGroup.data[0])
    }
  }
  return returnResult
}
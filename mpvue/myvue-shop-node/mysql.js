// 获取基础配置
const configs = require('./config')

var knex = require('knex') ({ // knex帮助我们创建线程池的连接
  client: 'mysql',
  connection: {
    host: configs.mysql.host,
    port: configs.mysql.port,
    user: configs.mysql.user,
    password: configs.mysql.pass,
    database: configs.mysql.db
  }
})
// 将基础配置和sdk.config 合并 导出初始化完成的sdk
module.exports = { mysql: knex }
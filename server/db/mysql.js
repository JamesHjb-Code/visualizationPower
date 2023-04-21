
// 创建数据库连接对象
const db = {
  host:'127.0.0.1',
  user:'root',
  password:'root',
  port: '3306',
  database:'power_substation',
  connectionLimit: 10000
}
// 导出db数据库对象
module.exports = db
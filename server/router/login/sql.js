// sql语句封装
const loginSqls = {
  login:'SELECT id,username,password FROM user WHERE username=? and password=?',
  getInfoByName:'SELECT id,username FROM user WHERE username=?',
  insertInfo:'INSERT INTO user (username,password,phone,address,avatar) VALUES (?,?,?,?,"./src/assets/images/avator.jpg")',
  getInfoById:'SELECT id,username,phone,address,avatar FROM user WHERE id=?'
}
// 导出sql语句
module.exports = loginSqls
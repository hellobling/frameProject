let express = require('express')
const bodyParser = require('body-parser')

let port = 8081
const router = require('./router')

let app = express()

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') //设置跨域 允许任何客户端访问
  next()
})
app
  .use(bodyParser.json({limit:'50mb'})) // 设置请求体最大大小为5M
  .use('/', router) // 注册业务逻辑处理模块
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port +'\n', 'env', 8081)
})

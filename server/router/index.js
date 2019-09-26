const path = require('path')
const express = require('express')
const router = express.Router()
let listData = {
  data: {
    content: [{
      'date': 1569421727000,
      name: 'fenga',
      address: 'hongkang'
    }]
  },
  code: 0,
  msg: ''
}

router
  .get('/liang/task/list', function (req, res) {
    res.send(listData)
  })
  // server 静态文件，防止阻塞
  .use('/liang', express.static(path.resolve(__dirname, '../../client/dist/')))


module.exports = router

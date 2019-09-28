const path = require('path')
const express = require('express')
const router = express.Router()
const UserController = require('../controller/user')
const AnimalController = require('../controller/animal')

router
  .get('/liang/user/list', UserController.userList)
  .get('/liang/animal/list', AnimalController.animalList)
  // server 静态文件，防止阻塞
  .use('/liang', express.static(path.resolve(__dirname, '../../dist/')))


module.exports = router

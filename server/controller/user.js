let userService = require('../service/user')

exports.userList = function (req, res) {
  let id = req.query.id || '';

  return userService.getUserList(id)
    .then(result => {
      res.json(result)
    }).catch(e => {
      console.log('controller userList error', e)
      res.json({
        data: {},
        code: -1,
        msg: 'userList interface error'
      })
    })
}

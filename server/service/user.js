let listData = {
  data: {
    content: [
      {
        date: 1569421727000,
        name: 'fenga',
        id: 1001,
        address: 'hongkang'
      },
      {
        'date': 1569421727000,
        name: 'liangliang',
        id: 1002,
        address: 'beijing'
      }
    ]
  },
  code: 0,
  msg: ''
}

let list2Data = {
  data: {
    content: [
      {
        date: 1569421727000,
        name: 'dog',
        id: 1001,
        address: 'hongkang'
      },
      {
        'date': 1569421727000,
        name: 'dd',
        id: 1002,
        address: 'beijing'
      }
    ]
  },
  code: 0,
  msg: ''
}

exports.getUserList = function (id) {
  id = id || '';
  let result = id ? listData.map(item => item.id > id) : listData
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result)
    }, 1000)
  })

  // 正常调用
  // return axios.get(url).then(config => {
  //   return config.data
  // }).catch(error => {
  //   throw new Error('service list failed')
  // })
}




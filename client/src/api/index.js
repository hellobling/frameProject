import axios from '../util/axiosUtil.js'

function checkStatus (res) {
  return new Promise((resolve, reject) => {
    if (res.status === 204) {
      resolve()
    } else if (res.status >= 200 && res.status < 300) {
      if (res.data.code === 'A00500') {
        // eslint-disable-next-line
        reject({
          status: 'A00500',
          data: res.data.msg
        })
      } else if (res.data.code === 'A00403') {
        // eslint-disable-next-line
        reject({
          status: 'A00500',
          data: res.data.msg
        })
      } else {
        resolve(res.data)
      }
    } else {
      reject(new Error(res.statusText))
    }
  })
}

export function fetchUserList () {
  return axios.get('/liang/user/list').then(checkStatus)
}
export function fetchAnimalList () {
  return axios.get('/liang/animal/list').then(checkStatus)
}

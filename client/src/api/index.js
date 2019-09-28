import axios from '../util/axiosUtil.js'

export function fetchUserList () {
  return axios.get('/liang/user/list').then(res => {
    return res.data
  })
}

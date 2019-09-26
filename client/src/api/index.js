import axios from '../util/axiosUtil.js'

export function fetchTaskList () {
  return axios.get('/liang/task/list').then(res => {
    return res.data
  })
}

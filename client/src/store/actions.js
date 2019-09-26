import * as types from './mutation-types'
import * as api from '../api/index'

export const fetchTaskList = function ({commit}) {
  return api.fetchTaskList().then(result => {
    let list = (result.data && result.data.content) || []
    commit(types.SET_TASK_LIST, list)
    return list
  })
}

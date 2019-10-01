import * as types from './mutation-types'
import * as api from '../api/index'

export const showLoading = makeAction(types.SHOW_LOADING)
export const hideLoading = makeAction(types.HIDE_LOADING)
function makeAction (type) {
  return ({commit}, args) => commit(type, args)
}

function generateErrorHandler (commit) {
  return function (err) {
    // api 请求统一错误处理
    commit(types.HIDE_LOADING)
    commit(types.MESSAGE, {
      type: 'error',
      msg: err.data
    })
    return Promise.reject(err)
  }
}
export const fetchUserList = function ({commit}) {
  commit(types.SHOW_LOADING)
  return api.fetchUserList().then(result => {
    let list = (result.data && result.data.content) || []
    commit(types.HIDE_LOADING)
    commit(types.SET_USER_LIST, list)
    return list
  }, generateErrorHandler(commit))
}
export const fetchAnimalList = function ({commit}) {
  commit(types.SHOW_LOADING)
  return api.fetchAnimalList().then(result => {
    let list = (result.data && result.data.content) || []
    commit(types.HIDE_LOADING)
    commit(types.SET_ANIMAL_LIST, list)
    return list
  }, generateErrorHandler(commit))
}

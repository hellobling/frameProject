import * as types from './mutation-types'
import * as api from '../api/index'

export const fetchUserList = function ({commit}) {
  return api.fetchUserList().then(result => {
    let list = (result.data && result.data.content) || []
    commit(types.SET_USER_LIST, list)
    return list
  })
}
export const fetchAnimalList = function ({commit}) {
  return api.fetchAnimalList().then(result => {
    let list = (result.data && result.data.content) || []
    commit(types.SET_ANIMAL_LIST, list)
    return list
  })
}

import { LIST_STUDENT, FILTER_STUDENT } from 'store/student/keys'
import iview from 'iview'
import * as api from 'api/student'

export default {
  // 获取列表
  async [LIST_STUDENT] ({ state, commit }) {
    try {
      commit(LIST_STUDENT, await api.list())
    } catch ({message}) {
      iview.Message.error(message)
    }
  },
// 根据条件过滤
  async [FILTER_STUDENT] ({state, commit, dispatch}, payload) {
    commit(FILTER_STUDENT, payload)
    dispatch(LIST_STUDENT)
  }
}

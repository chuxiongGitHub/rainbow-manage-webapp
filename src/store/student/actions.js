import { LIST_STUDENT, FILTER_STUDENT, STUDENT_QUERY_CHANGE } from 'store/student/keys'
import iview from 'iview'
import * as api from 'api/student'

export default {
  // 获取列表
  async [LIST_STUDENT] ({ state, commit }) {
    try {
      commit(LIST_STUDENT, await api.list(state.query))
    } catch ({message}) {
      iview.Message.error(message)
    }
  },
// 根据条件过滤
  async [FILTER_STUDENT] ({state, commit, dispatch}, payload) {
    commit(FILTER_STUDENT, payload)
    dispatch(LIST_STUDENT)
  },
  [STUDENT_QUERY_CHANGE] ({ commit, dispatch }, payload) {
    commit(STUDENT_QUERY_CHANGE, payload)
    dispatch(LIST_STUDENT)
  }
}

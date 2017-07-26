import { LIST_STUDENT, CREATE, MODAL, EDIT, QUERY_CHANGE } from 'store/student/keys'
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
  async [CREATE] ({ state, commit, dispatch }) {
    const form = { ...state.form }
    try {
      commit(CREATE, { status: 0 })
      if (!form.sno) throw new Error('学号不能为空')
      if (!form.sname) throw new Error('姓名不能为空')
      if (!form.ssex) throw new Error('性别不能为空')
      if (!form.sbirthday) throw new Error('出生年月不能为空')
      if (!form.sclass) throw new Error('班级不能为空')
      await api.create(form)
      dispatch(LIST_STUDENT)
      commit(MODAL, { name: 'form', show: false })
      commit(CREATE, { status: 1 })
    } catch ({message}) {
      commit(CREATE, { status: -1 })
      iview.Message.error(message)
    }
  },
  async [EDIT] ({commit}, sno) {
    try {
      commit(EDIT, { status: 0 })
      commit(MODAL, { name: 'form', show: true })
      commit(EDIT, { status: 1, info: await api.info(sno) })
    } catch ({message}) {
      commit(EDIT, { status: -1 })
      iview.Message.error(message)
    }
  },
  [QUERY_CHANGE] ({ commit, dispatch }, payload) {
    commit(QUERY_CHANGE, payload)
    dispatch(LIST_STUDENT)
  }
}

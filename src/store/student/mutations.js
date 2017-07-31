import { LIST_STUDENT, MODAL, EDIT, CREATE, FORM_CHANGE, QUERY_CHANGE, QUERY_RESULT } from './keys'
import _ from 'lodash'

export default {
  [LIST_STUDENT] (state, { list, page, size, total }) {
    state.list = list
    state.total = list.total
  },
  [MODAL] (state, { name, show }) {
    state.modal[name] = show
    if (name === 'form' && !show) {
      state.form = _.cloneDeep(state._form)
      state.isEdit = false
      state.loading.edit = false
    }
  },
  [EDIT] (state, { status, info }) {
    state.loading.edit = status === 0
    state.isEdit = true
    if (status === 1) {
      state.form = {...info}
    }
  },
  [CREATE] (state, { staus }) {
    state.loading.create = status === 0
  },
  [FORM_CHANGE] (state, { key, value }) {
    state.form[key] = value
  },
  [QUERY_CHANGE] (state, { key, value }) {
    state.query[key] = value
  },
  [QUERY_RESULT] (state, info) {
    state.queryResult = info
  }
}

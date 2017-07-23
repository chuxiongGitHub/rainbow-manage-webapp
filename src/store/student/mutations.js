import { LIST_STUDENT, FILTER_STUDENT, STUDENT_QUERY_CHANGE } from './keys'

export default {
  [LIST_STUDENT] (state, { list, page, size, total }) {
    state.list = list
    state.total = total
  },
  [FILTER_STUDENT] (state, { key, value }) {
    state.query[key] = value
  },
  [STUDENT_QUERY_CHANGE] (state, { key, value }) {
    state.query[key] = value
  }
}


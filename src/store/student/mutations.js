import { LIST_STUDENT, FILTER_STUDENT } from './keys'

export default {
  [LIST_STUDENT] (state, data = []) {
    state.list = data
  },
  [FILTER_STUDENT] (state, { key, value }) {
    state.query[key] = value
  }
}


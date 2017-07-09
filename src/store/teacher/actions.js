import { LIST_TEACHER } from './keys'
import * as api from 'api/teacher'
import iview from 'iview'

export default {
  async [LIST_TEACHER] ({ state, commit }) {
    try {
      commit(LIST_TEACHER, await api.list())
    } catch ({message}) {
      iview.Message.error(message)
    }
  }
}

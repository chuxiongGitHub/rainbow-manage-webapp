import { MAP_LIST } from 'store/map/keys'
import * as api from 'api/map'
import iview from 'iview'

export default {
  async [MAP_LIST] ({ state, commit }) {
    console.log(await api.list())
    try {
      commit(MAP_LIST, await api.list())
      console.log(123)
    } catch ({ message }) {
      iview.Message.error(message)
    }
  }
}

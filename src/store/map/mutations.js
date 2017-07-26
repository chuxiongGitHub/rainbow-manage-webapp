import { MAP_LIST } from './keys'

export default {
  [MAP_LIST] ({ state, data }) {
    state.list = data
  }
}

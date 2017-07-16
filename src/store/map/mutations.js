import { MAP_LIST } from './keys'

export default {
  [MAP_LIST] ({ state, data }) {
    console.log('123', state.list)
    state.list = data
  }
}

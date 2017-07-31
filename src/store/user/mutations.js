import { LIST } from './keys'

export default {
  [LIST] (state, { list, page, size, total }) {
    state.list = list
    state.total = list.total
  }
}

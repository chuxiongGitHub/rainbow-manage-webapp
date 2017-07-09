import { LIST_STUDENT } from './keys'

export default {
  [LIST_STUDENT] (state, data = []) {
    state.list = data
  }
}

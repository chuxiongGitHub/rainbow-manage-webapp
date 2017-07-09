import { LIST_TEACHER } from './keys'

export default {
  [LIST_TEACHER] (state, data = []) {
    console.log(state)
    state.list = data
  }
}

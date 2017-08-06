import { USER_INFO } from './keys'
export default {
  // 获取登录用户信息
  [USER_INFO] (state, data) {
    state.profile = data
  }
}

import { USER_INFO, LOG_OUT } from './keys'

import * as api from 'api/auth'
export default {
  // 获取登录用户信息
  async [USER_INFO] ({state, commit}) {
    commit(USER_INFO, await api.info())
  },
  // 用户退出
  async [LOG_OUT] ({ state }) {
    await api.logout()
  }
}

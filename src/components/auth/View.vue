<template lang="pug">
  .auth
    .wrapper
      input(type="text" v-model="mobile" placeholder="用户名")
      .line
      Input(type="password" v-model="password" placeholder="密码")
      button(type="primary" size="large" long @click="login") 登录
</template>
<script>
import * as api from 'api/auth'
export default {
  name: 'app',
  data () {
    return {
      mobile: '',
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        const { mobile, password } = this
        if (!mobile) throw new Error('用户名不能为空')
        if (!password) throw new Error('密码不能为空')

        await api.login({mobile, password})
        window.location.href = `${window.location.origin}/app`
      } catch ({ message }) {
        alert(message)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style/auth'
</style>

<template lang="pug">
.card-box
  Form(label-position="left" :model="form" ref="form")
    .formLogin-title
      Form-item()
        h3 系统登录
    Form-item(prop="mobile")
      Input(type="text" v-model="form.mobile" placeholder="用户名" size="large")
        Icon(type="ios-person-outline" slot="prepend")
    Form-item(prop="password")
      Input(type="password" v-model="form.password" placeholder="密码" size="large")
        Icon(type="ios-locked-outline" slot="prepend")
    .login-no-bottom
      Checkbox-group(v-model="form.remember")
        Checkbox(label="记住密码" name="Checkbox")
    .login-no-bottom
      Form-item()
        Row
          Col(:xs="{ span: 4, offset: 6 }")
            Button(type="primary" @click="login") 登录
          Col(:xs="{ span: 4, offset: 6 }")
            Button(type="ghost" @click="reset('form')") 重置
</template>
<script>
import * as api from 'api/auth'
export default {
  name: 'app',
  data () {
    return {
      form: {
        mobile: '',
        password: '',
        remember: []
      }
    }
  },
  methods: {
    async login () {
      try {
        const { mobile, password } = this.form
        if (!mobile) throw new Error('用户名不能为空')
        if (!password) throw new Error('密码不能为空')

        await api.login({mobile, password})
        window.location.href = `${window.location.origin}/app`
      } catch ({ message }) {
        alert(message)
      }
    },
    reset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style/auth'
</style>

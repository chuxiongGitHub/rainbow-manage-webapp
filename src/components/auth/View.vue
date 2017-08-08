<template lang="pug">
#app
  .card-box
    Form(label-position="left" :model="form" ref="form" style="width:350px;padding:35px 35px 15px 35px")
      .title
        h3 应用管理系统
      Form-item(prop="mobile")
        Input(type="text" v-model="form.mobile" placeholder="用户名")
          Icon(type="ios-person-outline" slot="prepend")
      Form-item(prop="password")
        Input(type="password" v-model="form.password" placeholder="密码")
          Icon(type="ios-locked-outline" slot="prepend")
      Form-item(style="align:center")
        Button(type="primary" @click="login" long) 登录
    .footer &copy 2017 陈彩虹 13698740791a@gmail.com
</template>
<script>
import * as api from 'api/auth'
export default {
  name: 'app',
  data () {
    return {
      form: {
        mobile: '',
        password: ''
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
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style/auth'
</style>

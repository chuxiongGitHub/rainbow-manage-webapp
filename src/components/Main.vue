<template lang="pug">
#app
  app-test
  .layout
    Menu(@on-select="menuChange", :active-name="$router.name", :theme="theme")
      Menu-item(name="student")
        Icon(type="person-stalker")
        | 学生信息
      Menu-item(name="user")
        Icon(type="folder")
        | 用户管理
      Menu-item(name="teacher")
        Icon(type="person")
        | 教师信息
      Menu-item(name="map")
        Icon(type="ios-location-outline")
        | 位置信息
      Menu-item(name="search")
        Icon(type="ios-search-strong")
        | 搜索列表
      .log-out
        Button(type="primary" @click="logout") 退出登录
    router-view.container
</template>

<script>
import { LOG_OUT } from 'store/auth/keys'
import AppTest from '@/components/base/Test'
export default {
  components: { AppTest },
  data () {
    return {
      theme: 'light'
    }
  },
  methods: {
    menuChange (name) {
      this.$router.push({ name })
    },
    logout () {
      console.log('退出系统')
      this.$store.dispatch(LOG_OUT)
      window.location.href = `${window.location.origin}/auth.html`
    }
  }
}
</script>

<style lang="stylus">
@import './base/main'
</style>


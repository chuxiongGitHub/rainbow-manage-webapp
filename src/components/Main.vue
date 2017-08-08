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
      Submenu(name="test")
        template(slot="title")
          Icon(type="ios-paper")
          | 内容管理
        Menu-item(name="test-1")
          Icon(type="ios-paper")
          | 文章管理
        Menu-item(name="test-2")
          Icon(type="ios-paper")
          | 评论管理
      Menu-item(name="echarts")
        Icon(type="stats-bars")
        | Echats报表
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
      theme: 'dark'
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


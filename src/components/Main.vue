<template lang="pug">
#app
  .layout
    Menu(@on-select="menuChange", :active-name="$router.name", :theme="theme")
      Menu-item(name="student")
        Icon(type="person-stalker")
        | 学生信息
      Menu-item(name="user")
        Icon(type="folder")
        | 用户信息
      Menu-item(name="teacher")
        Icon(type="person")
        | 教师信息
    router-view.container
</template>

<script>
export default {
  data () {
    return {
      theme: 'dark'
    }
  },
  methods: {
    menuChange (name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="stylus">
@import './base/main'
</style>


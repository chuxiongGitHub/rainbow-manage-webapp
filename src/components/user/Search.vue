<template lang="pug">
  .user-search
    Row(:gutter="10")
      Col(:span="10")
        Form(:label-width="80")
          Form-item(label="姓名或学号")
            Input(placeholder="请输入姓名或学号查询" icon="ios-search-strong" @on-enter="search")
      Col(:span="14")
        Form(:label-width="100")
          Form-item(style="text-align:right")
            Button(type="info" @click="search") 查询
            Button(type="primary" style="margin-left:8px") 创建用户
            Button(type="ghost" @click="clear" style="margin-left:8px") 清空
</template>

<script>
export default {
  methods: {
    search () {

    },
    clear () {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style/user'
</style>

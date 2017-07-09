<template lang="pug">
.layout
    Row(type="flex")
    .layout-menu-left
      Col(span="5")
        Menu(active-name="1-2" theme="dark" width="auto" :open-names="['1']")
          Submenu(name="1")
            template(slot="title")
              Icon(type="ios-navigate")
              | 导航一
            Menu-item(name="1-1") 选项一
            Menu-item(name="1-2") 选项二
            Menu-item(name="1-3") 选项三
          Submenu(name="2")
            template(slot="title")
              Icon(type="ios-keypad")
              | 导航二
            Menu-item(name="2-1") 自动服务
            Menu-item(name="2-2") 人工服务

          Submenu(name="3")
            template(slot="title")
              Icon(type="ios-analytics")
              | 导航三
            Menu-item(name="3-1") 用户管理
            Menu-item(name="3-2") 系统管理
            Menu-item(name="3-3") 联系我们
        Col(span="19")
          .layout-header
          .layout-breadcrumb
            breadcrumb
              breadcrumb-item(href='#') 首页
              breadcrumb-item(href='#') 应用中心
              breadcrumb-item 某应用
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import './style/view'
</style>

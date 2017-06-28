<template lang="pug">
  .layout
    div
      Menu(mode="horizontal" active-name="1")
        .layout-assistant
          Menu-item(name="1") 一级导航
          Menu-item(name="2") 二级导航
          Menu-item(name="3") 三级导航
</template>
<style lang="stylus" scoped>
@import './style/app'
</style>


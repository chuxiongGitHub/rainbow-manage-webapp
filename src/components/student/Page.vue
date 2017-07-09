<template lang="pug">
.student-page
  Page(:total="pageInfo.total" :current="pageInfo.current" @on-change="" show-total show-sizer placement="top")
</template>
<script>
export default {
  data () {
    return {
      pageInfo: {
        current: 1,
        total: 104,
        pageSize: 10,
        pageSizeOpts: [10, 20, 30, 40]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style/page'
</style>

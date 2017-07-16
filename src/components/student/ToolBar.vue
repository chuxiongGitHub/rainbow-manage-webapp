<template lang="pug">
.toolbar
  Row(:gutter="8")
    Col(:span="4")
      Form(:label-width="80" :model="queryForm")
        Form-item(label="学号")
          Input(v-model="queryForm.sno", placeholder="请输入")
    Col(:span="18")
      .row
        Button(type="primary" @click="search") 查询
        Button(type="default" style="margin-left:8px" @click="excel")  导出
        Button(type="primary" style="margin-left:8px" @click="clear") 清空
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      queryForm: ({student}) => student.query
    })
  },
  methods: {
    search () {

    },
    excel () {
      console.log('开始导出Excel数据')
      window.location.href = 'localhost:85/api/v1/excel'
    },
    clear () {
      this.$store.dispatch('student/list_student')
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import './style/toolBar'
</style>

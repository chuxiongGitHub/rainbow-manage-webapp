<template lang="pug">
.toolbar
  Row(:gutter="8")
    Col(:span="15")
      Form(:label-width="90" :model="queryForm")
        Form-item(label="综合查询")
          Input(v-model="queryForm.searchKey", @on-enter="search", placeholder="请输入学号/姓名/班级进行查询", icon="ios-search-strong")
    Col(:span="8")
      Form(:label-width="80")
        Form-item(style="text-align:right")
          Button(type="primary" @click="open") 新增
          Button(type="primary" @click="search" style="margin-left:8px") 查询
          Button(type="default" style="margin-left:8px" @click="excel")  导出
          Button(type="primary" style="margin-left:8px" @click="clear") 清空
</template>
<script>
import { mapState } from 'vuex'
import { MODAL, QUERY_CHANGE } from 'store/student/keys'
export default {
  data () {
    return {
      searchKey: ''
    }
  },
  computed: {
    ...mapState({
      queryForm: ({student}) => student.query
    })
  },
  methods: {
    search () {
      this.$store.dispatch(QUERY_CHANGE, { key: this.searchKey, value: this.searchKey })
    },
    excel () {
      console.log('开始导出Excel数据')
      window.location.href = 'localhost:85/api/v1/excel'
    },
    clear () {
      this.queryForm.searchKey = ''
      this.queryForm.page = 1
      this.$store.dispatch('student/list/student')
    },
    open () {
      this.$store.commit(MODAL, { name: 'form', show: true })
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import './style/toolBar'
</style>

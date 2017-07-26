<template lang="pug">
.toolbar
  Row(:gutter="8")
    Col(:span="4")
      Form(:label-width="80" :model="queryForm")
        Form-item(label="学号")
          Input(v-model="queryForm.sno", placeholder="请输入学号")
    Col(:span="4")
      Form(:label-width="80" :model="queryForm")
        Form-item(label="姓名")
           Input(v-model="queryForm.sname", placeholder="请输入姓名")
    Col(:span="4")
      Form(:label-width="80" :model="queryForm")
        Form-item(label="性别")
          Input(v-model="queryForm.ssex" placeholder="请输入性别")
    Col(:span="4")
      Form(:label-width="80" :model="queryForm")
        Form-item(label="班级")
          Input(v-model="queryForm.sclass" placeholder="请输入班级")
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
import { MODAL } from 'store/student/keys'
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

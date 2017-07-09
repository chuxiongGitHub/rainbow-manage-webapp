<template lang="pug">
  Table(:columns="columns" :data="teachers")
</template>
<script>
import { mapState } from 'vuex'
import { LIST_TEACHER } from 'store/teacher/keys'
export default {
  data () {
    return {
      columns: [
        {
          title: '序号',
          type: 'index'
        },
        {
          title: '教工编号',
          key: 'tno'
        },
        {
          title: '教师姓名',
          key: 'tname'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      teachers: ({teacher}) => teacher.list
    })
  },
  created () {
    console.log('调取created方法')
    this.$store.dispatch(LIST_TEACHER)
  }
}
</script>


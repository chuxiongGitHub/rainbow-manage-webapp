<template lang="pug">
  Table(:columns="columns" :data="students" stripe highlight-row)
</template>

<script>
import { mapState } from 'vuex'
import { LIST_STUDENT } from 'store/student/keys'
import AppTableExpand from './TableExpand'
export default {
  props: ['list'],
  data () {
    return {
      columns: [
        {
          type: 'expand',
          width: 50,
          render: (h, params) => {
            return h(AppTableExpand, {
              props: {
                row: params.row
              }
            })
          }
        },
        {
          type: 'index',
          width: 60,
          align: 'center',
          title: '序号'
        },
        {
          title: '学号',
          key: 'sno'
        },
        {
          title: '姓名',
          key: 'sname'
        },
        {
          title: '性别',
          key: 'ssex'
        },
        {
          title: '生日',
          key: 'sbirthday'
        },
        {
          title: '班级',
          key: 'sclass'
        }
      ]
    }
  },
  components: { AppTableExpand },
  computed: {
    ...mapState({
      students: ({student}) => student.list
    })
  },
  created () {
    this.$store.dispatch(LIST_STUDENT)
  }
}
</script>


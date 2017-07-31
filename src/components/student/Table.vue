<template lang="pug">
  Table(:columns="columns" :data="students.list" stripe highlight-row)
</template>

<script>
import { mapState } from 'vuex'
import { LIST_STUDENT, EDIT } from 'store/student/keys'
import AppTableExpand from './TableExpand'
export default {
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
        },
        {
          title: '操作',
          align: 'center',
          render: (h, { row }) => {
            return <div style="margin:4px 0">
              <i-button type="info" size="small" onClick={ () => this.edit(row.sno) }>编辑</i-button>
              <i-button type="error" size="small" style="margin-left:5px" onClick={ () => this.delete(row.sno) }>删除</i-button>
            </div>
          }
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
  },
  methods: {
    edit (sno) {
      this.$store.dispatch(EDIT, sno)
    },
    delete (sno) {
      alert(sno)
    }
  }
}
</script>


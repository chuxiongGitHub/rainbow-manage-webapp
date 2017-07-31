<template lang="pug">
  .user-table
    Table(:columns="columns" stripe :data="users")
</template>
<script>
import { LIST } from 'store/user/keys'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      columns: [
        {
          type: 'index',
          title: '序号'
        },
        {
          title: '姓名',
          key: 'username'
        },
        {
          title: '手机号码',
          key: 'mobile'
        },
        {
          title: '用户状态',
          align: 'center',
          filters: [
            { label: '正常', value: 1 },
            { label: '停用', value: 0 }
          ],
          render: (h, { row }) => {
            switch (row.status) {
              case 0:
                return <span style="color:#9E9E9E">停用</span>
              case 1:
                return <span style="color:#009688">正常</span>
            }
          }
        },
        {
          title: '创建时间',
          key: 'createTime'
        },
        {
          title: '用户类别',
          key: 'type'
        },
        {
          title: '操作'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      users: ({user}) => user.list.list
    })
  },
  created () {
    this.$store.dispatch(LIST)
  }
}
</script>

<style lang="stylus" scoped>
@import './style/user'
</style>

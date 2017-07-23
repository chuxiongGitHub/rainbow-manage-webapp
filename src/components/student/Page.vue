<template lang="pug">
.student-page
  Page(
    show-total,
    show-sizer,
    :total="total",
    :current="page",
    @on-change="page => queryChange('page', page)",
    @on-page-size-change="size => queryChange('size', size)",
    placement="top")
</template>
<script>
import { STUDENT_QUERY_CHANGE } from 'store/student/keys'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      page: ({student}) => student.query.page,
      size: ({student}) => student.query.size,
      total: ({student}) => student.total
    })
  },
  methods: {
    queryChange (key, value) {
      this.$store.dispatch(STUDENT_QUERY_CHANGE, { key, value })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style/page'
</style>

<template lang="pug">
  .search
    Row
      Col(:span="15")
        Select(
          filterable,
          remote,
          :loading="loading",
          :remote-method="remoteQuery",
          :not-found-text="out",
          setQuery="c"
          placeholder="请输入")
          Option(v-for="student in result" :value="student.sname" :key="student.sname") {{ student.sname }}
</template>
<script>
import { mapState } from 'vuex'
import { QUERY_RESULT } from 'store/student/keys'
import _ from 'lodash'
export default {
  data () {
    return {
      loading: false,
      searchKey: '',
      queryResult: []
    }
  },
  computed: {
    ...mapState({
      result: ({student}) => student.queryResult
    })
  },
  methods: {
    // 远程搜索
    remoteQuery: _.debounce(function (keyword) { this.query(keyword) }, 300),
    async query (keyword) {
      this.$store.dispatch(QUERY_RESULT, keyword)
    }
  },
  out () {
    if (this.result === '') {
      console.log('123')
      return
    } else {
      return '暂时没有数据'
    }
  }
}
</script>

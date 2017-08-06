<template lang="pug">
  Row
    Col(:span="22" style="text-align:right") 当前用户：
    Col(:span="2") {{ user.username }}
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: ({auth}) => auth.profile
    })
  }
}
</script>

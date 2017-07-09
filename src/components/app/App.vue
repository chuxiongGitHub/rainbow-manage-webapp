<template lang="pug">
.text {{ system }}
</template>

<script>
export default {
  data () {
    return {
      spanLeft: 5,
      system: '用户管理系统'
    }
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
      } else {
        this.spanLeft = 5
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style/app'
</style>


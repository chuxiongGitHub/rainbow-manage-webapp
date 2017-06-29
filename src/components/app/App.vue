<template lang="pug">
.text 哈哈哈
</template>

<script>
export default {
  data () {
    return {
      spanLeft: 5
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


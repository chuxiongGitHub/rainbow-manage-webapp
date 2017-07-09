<template lang="pug">
  div
    app-info(:row="row")
</template>
<script>
import AppInfo from './Info'
export default {
  props: {
    row: Object
  },
  components: { AppInfo }
}
</script>


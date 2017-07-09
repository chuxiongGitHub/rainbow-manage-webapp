<template lang="pug">
.student
  .app-table
    app-table
  app-page
</template>

<script>
import AppTable from './Table'
import AppTooBar from './ToolBar'
import AppPage from './Page'
export default {
  components: { AppTable, AppTooBar, AppPage }
}
</script>
<style lang="stylus">
@import './style/view'
</style>


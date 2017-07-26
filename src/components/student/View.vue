<template lang="pug">
.student-container
  .app-tooBar
    app-tooBar
  .app-table
    app-table
  app-page
  app-modal
</template>

<script>
import AppTable from './Table'
import AppTooBar from './ToolBar'
import AppPage from './Page'
import AppModal from './Modal'
export default {
  components: { AppTable, AppTooBar, AppPage, AppModal }
}
</script>
<style lang="stylus">
@import './style/view'
</style>


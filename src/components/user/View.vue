<template lang="pug">
  .user-container
    app-search
    app-table
    app-page
</template>
<script>
import AppTable from './Table'
import AppPage from './Page'
import AppSearch from './Search'
export default {
  components: { AppPage, AppSearch, AppTable }
}
</script>

<style lang="stylus" scoped>
@import './style/user'
</style>

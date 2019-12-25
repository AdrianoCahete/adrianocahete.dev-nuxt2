<template>
  <div class="page">
    <sidebar-menu />
    <pageContent />
  </div>
</template>

<script>
import sidebarMenu from '~/components/sidebar'
import pageContent from '~/components/content'

export default {
  components: {
    sidebarMenu,
    pageContent
  }
}
</script>

<style lang="stylus">
.page {
  display: flex;
}
</style>

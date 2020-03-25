<template>
  <div class="page">
    <svgLibrary />
    <sidebar-menu />
    <pageContent />
  </div>
</template>

<script>
import svgLibrary from '~/components/common/svgLibrary'
import sidebarMenu from '~/components/sidebar'
import pageContent from '~/components/content'

export default {
  components: {
    svgLibrary,
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

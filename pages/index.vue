<template>
  <div :class="$device.isMobile || $device.isTablet ? 'page isMobile' : 'page'">
    <svgLibrary />
    <navbar-menu />
    <pageContent />
  </div>
</template>

<script>
import svgLibrary from '~/components/common/svgLibrary'
import navbarMenu from '~/components/common/navbar'
import pageContent from '~/components/content'

export default {
  components: {
    svgLibrary,
    navbarMenu,
    pageContent
  }
}
</script>

<style lang="stylus">
</style>

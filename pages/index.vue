<template>
  <fragment>
    <div v-if="$device.isMobile || $device.isTablet" class="page isMobile">
      <svgLibrary />
      <sidebar-menu />
      <pageContent />
    </div>
    <div v-else-if="$device.isDesktop" class="page">
      <svgLibrary />
      <sidebar-menu />
      <pageContent />
    </div>
  </fragment>
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

@media (max-width: 1024px) {
  .page {
    flex-direction: column;
  }
}

.isMobile {
  flex-direction: column;
}
</style>

<template>
  <section>
    <svgLibrary />
    <nuxt />
  </section>
</template>

<script>
// import behanceFrame from '~/components/common/behance/behanceFrame.vue'
import svgLibrary from '~/components/common/svgLibrary'

export default {
  components: {
    svgLibrary
  }
}
</script>

<style lang="stylus">
    @import '~assets/styles/base.styl'

    .isMobile {
      @import '~assets/styles/components/isMobile.styl'
    }
</style>

<template>
  <section :class="$nuxt.isOffline ? 'isOffline' : ''">
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
  },

  async asyncData ({ $axios, $payloadURL, route }) {
    // DreaMinder/nuxt-payload-extractor config
    if (process.static && process.client && $payloadURL) { return await $axios.$get($payloadURL(route)) }
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/base.styl'

.isMobile {
  @import '~assets/styles/components/isMobile.styl'
}
</style>

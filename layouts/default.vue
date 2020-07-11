<template>
  <section :class="[ $nuxt.isOffline ? 'isOffline' : '', $device.isMobile || $device.isTablet ? 'page isMobile' : 'page' ]">
    <IconLibrary />
    <nuxt />
  </section>
</template>

<script>
import IconLibrary from '~/components/common/iconLibrary'

export default {
  components: {
    IconLibrary
  },

  async asyncData ({ $axios, $payloadURL, route }) {
    // DreaMinder/nuxt-payload-extractor config
    if (process.static && process.client && $payloadURL) { return await $axios.$get($payloadURL(route)) }
  },

  data () {
    return {
      mobileState: this.$device.isMobile
    }
  },

  head () {
    return {
      bodyAttrs: {
        class: this.mobileState ? 'isMobile' : ''
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/base.styl'

body {
  &.isMobile {
    background-size: 500% 300%;
  }
}

.isMobile {
  flex-direction: column;

  @import '~assets/styles/components/isMobile.styl'
}
</style>

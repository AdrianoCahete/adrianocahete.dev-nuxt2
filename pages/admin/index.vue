<template>
  <section :class="$device.isMobile || $device.isTablet ? 'page isMobile' : 'page'">
    <section class="content" style="margin-left: auto;">
      <section id="nopelandia" class="section isCentered">
        <p>Not a default CMS site, sorry about that. :)</p>
        <nuxt-link to="/">
          Back to safe house...
        </nuxt-link>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  layout: 'error',

  head () {
    return {
      title: 'NOPE!',

      bodyAttrs: {
        class: 'bg-infinite'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/styles/components/section.styl'
</style>

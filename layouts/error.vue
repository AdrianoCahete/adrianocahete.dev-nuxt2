<template>
  <section :class="$device.isMobile || $device.isTablet ? 'page isMobile' : 'page'">
    <section class="content error">
      <section id="error" class="section isCentered">
        <!-- <logo /> -->
        <h1 v-if="error.statusCode === 404">
          Page not found
        </h1>
        <h1 v-else>
          An error occurred
        </h1>
        <nuxt-link to="/">
          Home page
        </nuxt-link>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'

  .error {
    margin-left: 0;
    width: 100vw;
  }
</style>

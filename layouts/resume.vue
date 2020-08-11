<template>
  <section class="resume-page">
    <nuxt />
  </section>
</template>

<script>
export default {
  head () {
    return {
      bodyAttrs: {
        class: 'resume-page'
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/base.styl'

@media print {
  .resume-page {
    min-height: 290mm;
  }
}
</style>

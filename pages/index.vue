<template>
  <section class="content home">
    <section id="home" class="section isCentered">
      <whoAmI
        author-name="Adriano Cahete"
        job-title="Product Designer & User Interface Developer"
        is-main
      />
    </section>
  </section>
</template>

<script>
import whoAmI from '~/components/common/whoAmI'

export default {
  components: {
    whoAmI
  },

  // transition: 'home',

  head () {
    return {
      titleTemplate: 'Adriano Cahete | Product Designer & UI Developer'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'

.home {
  animation: fadeIn .5s ease-in;
}

.isMobile {
  .home {
    overflow: hidden;

    .section {
      min-height: 94vh;
    }
  }
}
</style>

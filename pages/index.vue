<template>
  <section class="content home">
    <section id="home" class="section isCentered">
      <whoAmI
        author-name="Adriano Cahete"
        job-title="Product Designer & User Interface Developer"
        is-main
      />
      <!-- {{ appVersion }} -->
    </section>
  </section>
</template>

<script>
import whoAmI from '~/components/common/whoAmI'

export default {
  components: {
    whoAmI
  },

  head () {
    return {
      title: 'Home'
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

<template>
  <section class="content home">
    <section id="home" class="section isCentered">
      <whoAmI
        author-name="Adriano Cahete"
        job-title="Design Technologist & DesignOps"
        current-company="Philips | Hero99"
        is-main
      />
    </section>
  </section>
</template>

<script>
import whoAmI from "~/components/common/whoAmI";

export default {
  components: {
    whoAmI,
  },

  // transition: 'home',

  head() {
    return {
      titleTemplate: "Adriano Cahete | Design Technologist & DesignOps",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/components/section.scss";

.home {
  animation: fadeIn 0.5s ease-in;
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

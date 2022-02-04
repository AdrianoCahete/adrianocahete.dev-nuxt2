<template>
  <section class="content home">
    <section id="home" class="section isCentered">
      <whoAmI
        author-name="Adriano Cahete"
        job-title="Product Designer & Design Technologist"
        current-company="Bradesco | Capgemini"
        is-main
      />
    </section>
  </section>
</template>

<script>
import whoAmI from "~/components/common/whoAmI";

export default {
  components: {
    whoAmI
  },

  // transition: 'home',

  head() {
    return {
      titleTemplate: "Adriano Cahete | Product Designer & Design Technologist"
    };
  }
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

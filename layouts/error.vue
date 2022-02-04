<template>
  <section class="page">
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
          Home
        </nuxt-link>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  props: ["error"]
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/components/section.scss";

.error {
  margin-left: 0;
  width: 100vw;
}
</style>

<template>
  <section class="resume-page">
    <slot />
  </section>
</template>

<script>
export default {
  setup() {
    useMeta({
      bodyAttrs: {
        class: "resume-page",
      },
    });
  },
};
</script>

<style lang="scss">
@import "~assets/styles/base.scss";

@media print {
  .resume-page {
    min-height: 290mm;
  }
}
</style>

<template>
  <section :class="'alert ' + 'alert-' + type">
    <section class="alertIcon">
      <!-- TODO: Add v-if to icon based on type -->
      {{ icon }}
    </section>
    <section>
      {{ message }}
    </section>
  </section>
</template>

<script>
export default {
  // components: {
  // },

  props: {
    type: {
      type: String,
      required: true,
      default: ""
    },
    icon: {
      type: String,
      required: false,
      default: ""
    },
    message: {
      type: String,
      required: true,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.alert {
  padding: 1vh 1vw;
  background: var(--scrollbarColor); // TODO: Move to var
  margin: 1vw 0;

  &.alert-info {
    background-color: var(--alertInfo);
    color: #fff;
  }

  .alertIcon {
    &:empty {
      display: none;
    }
  }
}
</style>

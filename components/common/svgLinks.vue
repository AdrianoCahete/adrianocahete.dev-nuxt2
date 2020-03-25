<template>
  <a :href="url" :title="icon" target="_blank" rel="nofollow,noopener,external">
    <svg class="">
      <use :xlink:href="'#'+ icon"></use>
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    'url': {
      type: String,
      required: true,
      default: '#'
    },
    'icon': {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  svg {
    width: 24px;
    height: @width;
    fill: var(--textColor, #ffffff);
  }
</style>

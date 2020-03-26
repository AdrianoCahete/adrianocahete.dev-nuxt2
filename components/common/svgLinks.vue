<template>
  <a
    :href="url"
    :title="title"
    v-if="hideMobile == false"
    :class="cssClass"
    target="_blank"
    rel="nofollow,noopener,external"
  >
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
    },
    'title': {
      type: String,
      default: ''
    },
    'cssClass': {
      type: String,
      default: ''
    },
    'hideMobile': {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  svg {
    width: 24px;
    height: @width;
    fill: var(--textColor, #ffffff);

    &:hover {
      fill: var(--primaryColor, rgba(255, 255, 255, .5));
      transition: .3s ease fill;
    }
  }
</style>

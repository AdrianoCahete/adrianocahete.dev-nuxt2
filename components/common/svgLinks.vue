<template>
  <a
    :href="url"
    :title="title"
    :class="{ hideOnMobile: hideMobile }"
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
    url: {
      type: String,
      required: true,
      default: '#'
    },
    icon: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    hideMobile: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  a {
    color: var(--sidebarColor, inherit);
  }

  svg {
    width: 24px;
    height: @width;
    fill: inherit;

    &:hover {
      fill: var(--primaryColor, rgba(255, 255, 255, .5));
      transition: .3s ease fill;
    }
  }

  .cardLink-Item {
    fill: var(--textColor, #fff);

    svg {
      height: 15px;
    }
  }
</style>

<template>
  <a
    v-if="url && (!($device.isMobile && hideMobile))"
    :href="url"
    :title="title"
    target="_blank"
    rel="nofollow,noopener,external"
  >
    <svg>
      <use :xlink:href="'#'+ icon"></use>
    </svg>
  </a>
  <i
    v-else-if="!($device.isMobile && hideMobile)"
    :title="title"
    class="icon"
  >
    <svg>
      <use :xlink:href="'#'+ icon"></use>
    </svg>
  </i>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: ''
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
    color: var(--navbarIconColorAlt, inherit);
  }

  .icon {
    > svg {
      height: 1.7rem;
    }
  }

  svg {
    width: 24px;
    height: @width;
    fill: inherit;

    &:hover {
      fill: var(--primaryColor, rgba(0, 0, 0, .5));
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

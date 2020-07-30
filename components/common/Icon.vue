<template>
  <a
    v-if="url"
    :href="url"
    :title="title"
    :class="[ 'iconDefault', hideMobile ? ' hideSmall ' : '']"
    target="_blank"
    rel="nofollow,noopener,external"
  >
    <!-- :class="[ hideMobile ? 'hideSmall ' : '', $device.isMobile && hideMobile ? 'hideMobile' : '' ]" -->
    <svg>
      <use :xlink:href="'#'+ icon"></use>
    </svg>
  </a>
  <i
    v-else-if="!url"
    :title="title"
    :class="[ 'icon', hideMobile ? ' hideSmall ' : '']"
  >
    <!-- :class="[ 'icon ', hideMobile ? 'hideSmall ' : '', $device.isMobile && hideMobile ? 'hideMobile' : '' ]" -->
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
    fill: var(--iconColorHover, rgba(0, 0, 0, .5));
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

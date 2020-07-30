<template>
  <a
    :href="url"
    :title="title"
    class="btn"
    :class="'btn-' + type"
    target="_blank"
    rel="nofollow,noopener,external"
  >
    <svg v-if="icon">
      <use :xlink:href="'#'+ icon"></use>
    </svg>
    <span>{{ title }}</span>
  </a>
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
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    hideMobile: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn {
  color: var(--textColor, #FFFFFF);
}

.btn-primary {
  text-text-decoration: none;
}
</style>

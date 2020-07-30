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
  display: inline-block;
  text-align: center;
  color: var(--textColor, #FFFFFF);
  border: 2px solid currentColor;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-decoration: none;
  transition: all ease-in-out .5s;

  &:hover {
    background-color: var(--textColor, #FFFFFF);
    color: var(--btnColorHover);
    transition: all ease-in-out .5s;
  }
}

.btn-primary {
  // border-color: var(--defaultBorderColor);
}

// @media (max-width: 1024px) {
//   .btn {
//     padding: 1rem 2rem;
//   }
// }
</style>

<template>
  <a
    :href="url"
    :title="title"
    class="btn"
    :class="'btn-' + type"
    target="_blank"
    rel="nofollow,noopener,external"
    download
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
  position: relative;
  background-size: 100% 100%;
  background: transparent;
  outline: 0;
  border-radius: 10px;
  padding: 1rem 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-decoration: none;
  transition: all ease-in-out .5s;
  z-index: 0;

  span {
    z-index: 2;
  }

  &:hover {
    background-color: var(--textColor, #FFFFFF);
    transition: all ease-in-out .5s;
  }

  &.btn-primary {
    &::before,
    &::after {
      content: " ";
      position: absolute;
      border-radius: 5px;
    }

    &::before {
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -2;
      background: var(--btnPrimaryBorderColor);
    }

    &:after {
      top: 3px;
      bottom: 3px;
      left: 3px;
      right: 3px;
      background-color: #fff;
      z-index: -1;
      opacity: 1;
      transition-property: all;
      transition-duration: 0.6s;
      transition-timing-function: ease-in-out;
    }

    &:hover {
      color: #FFFFFF;

      &:after {
        opacity: 0;
      }
    }
  }
}

// @media (max-width: 1024px) {
//   .btn {
//     padding: 1rem 2rem;
//   }
// }
</style>

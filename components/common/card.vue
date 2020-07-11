<template>
  <transition name="slide-fade">
    <div class="card" :class="{ isMinor: isMinor }" :style="'animation-delay:'+ animationDelay + 's'">
      <h2 class="cardTitle">
        <span v-if="isMinor">[Minor] </span>
        {{ title }}
        <Icon v-if="url" :url="url" :icon="icon" :title="tooltip" class="cardLink-Item" />
      </h2>
      <h3 class="cardSubTitle">
        {{ subtitle }}
      </h3>
      <h4 v-if="info" class="cardInfo">
        {{ info }}
      </h4>
      <div v-if="supportLink" class="cardLinks">
        <a :href="supportLink" target="_blank" rel="nofollow,noopener,external">
          <img v-if="supportImg" :src="supportImg" :alt="supportTooltip">
        </a>
      </div>
      <ul class="cardItems">
        <slot />
      </ul>
    </div>
  </transition>
</template>

<script>
import Icon from '~/components/common/Icon.vue'

export default {
  components: {
    Icon
  },

  props: {
    animationDelay: {
      type: String,
      required: false,
      default: '0'
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    subtitle: {
      type: String,
      required: true,
      default: ''
    },
    info: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: 'link'
    },
    tooltip: {
      type: String,
      required: false,
      default: ''
    },
    supportLink: {
      type: String,
      required: false,
      default: ''
    },
    supportImg: {
      type: String,
      required: false,
      default: ''
    },
    supportTooltip: {
      type: String,
      required: false,
      default: ''
    },
    isMinor: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.card {
  margin-bottom: 2rem;
  padding-bottom: .8rem;
  opacity: 0;
  animation: fadeIn .5s ease-in;
  animation-fill-mode: forwards;

  .cardSubTitle,
  .cardInfo {
    font-weight: normal;
  }

  .cardTitle {
    color: var(--textColor, #ffffff);
    font-weight: 500;
  }

  .cardSubTitle {
    font-size: 1.8rem;
    color: var(--grayedOut, #FFFFFF);
    margin-bottom: .5rem;
  }

  .cardInfo {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  .cardItems {
    list-style-type: circle;
    padding-left: 2rem;
  }

  &.isMinor {
    .cardTitle {
      font-size: 1.8rem;
    }

    .cardSubTitle {
      font-size: 1.5rem;
    }

    .cardInfo {
      font-size: 1.3rem;
    }
  }
}
</style>

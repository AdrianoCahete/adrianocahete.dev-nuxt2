<template>
  <transition name="slide-fade">
    <section class="card" :class="{ isMinor: isMinor }" :style="'animation-delay:'+ animationDelay + 's'">
      <h3 class="cardTitle">
        <span v-if="isMinor">[Minor] </span>
        {{ title }}
        <Icon v-if="url" :url="url" :icon="icon" :title="tooltip" class="cardLink-Item" />
      </h3>
      <h4 class="cardSubTitle">
        {{ subtitle }}
      </h4>
      <h5 v-if="info" class="cardInfo">
        {{ info }}
      </h5>
      <section v-if="supportLink" class="cardLinks">
        <a :href="supportLink" target="_blank" rel="nofollow,noopener,external">
          <img v-if="supportImg" :src="supportImg" :alt="supportTooltip">
        </a>
      </section>
      <transition-group v-if="items" tag="ul" name="list" class="cardItems" appear>
        <li v-for="(item, idx) in items" :key="idx + 0">
          {{ item.name }} <Icon v-if="item.url" :url="item.url" icon="link" :title="item.name" class="cardLink-Item" />
        </li>
      </transition-group>
    </section>
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
    items: {
      type: Array,
      required: true,
      default: () => []
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
    font-size: 1.6rem;
    color: var(--grayedOut, #FFFFFF);
    margin-bottom: .5rem;
  }

  .cardInfo {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .cardItems {
    list-style-type: none;
    padding-left: .5rem;

    li {
      &::before {
        content: "▹";
        // color: var(--textColor);
      }
    }
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

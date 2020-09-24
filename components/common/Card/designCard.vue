<template>
  <transition name="slide-fade">
    <section
      class="card-design"
      :class="{ isMinor: isMinor, selfMade: isSelfMade }"
      :data-theme="cardTheme ? 'theme-' + cardTheme : ''"
      :style="'animation-delay:'+ animationDelay + 's'"
    >
      <a
        :href="url"
        target="_blank"
        rel="nofollow,noopener,external"
      >
        <section class="cardContent">
          <h3 class="cardTitle">
            <span v-if="isMinor">[Minor] </span>
            {{ title }}
          </h3>
          <section v-if="logoImage">
            logoImage
          </section>
          <h4 class="cardSubTitle">
            {{ subtitle }}
          </h4>
          <h5 v-if="info" class="cardInfo">
            {{ info }}
          </h5>
          <!-- <transition-group v-if="items" tag="ul" name="list" class="cardItems" appear>
            <li v-for="(item, idx) in items" :key="idx + 0">
              {{ item.name }} <Icon v-if="item.url" :url="item.url" icon="link" :title="item.name" class="cardLink-Item" />
            </li>
          </transition-group> -->
        </section>
      </a>
    </section>
  </transition>
</template>

<script>
export default {
  components: {
  },

  props: {
    animationDelay: {
      type: String,
      required: false,
      default: '0'
    },
    cardTheme: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    logoImage: {
      type: String,
      required: false,
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
    tooltip: {
      type: String,
      required: false,
      default: ''
    },
    isMinor: {
      type: Boolean,
      required: false,
      default: false
    },
    isSelfMade: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-design {
  display: flex;
  flex-direction: column;
  height: 25vw;
  width: 25vw;
  max-height: 300px;
  max-width: 300px;
  margin-bottom: .3rem;
  margin-right: .3rem;
  padding: 1.2rem;
  border-radius: 5px;
  text-align: center;
  transition: all .5s ease-in-out;
  background-color: #2E3944;

  a {
    height: 100%;
    width: 100%;
    text-decoration: none;
  }

  &:not(.noAnimation) {
    opacity: 0;
    animation: fadeIn .5s ease-in;
    animation-fill-mode: forwards;
  }

  .cardContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .cardSubTitle,
  .cardInfo {
    font-weight: 300;
  }

  .cardTitle {
    color: #FFFFFF;
    font-weight: 500;
  }

  .cardSubTitle {
    font-size: 1.6rem;
    color: #f3f3f3;
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
        color: var(--subtitleColor);
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

  &:hover {
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, .7);
    transition: all .7s ease-in-out;
    transform: scale(1.02);
    z-index: 2;
  }

  &[data-theme$='1'] {
    background: red;
    color: #ffffff;
  }
}

// Tablet
@media (max-width: 670px) {
  .card-design {
    max-width: 100%;
    width: calc(50% - 1rem);
    height: 20vh;
    max-height: 30%;
    margin-bottom: 2rem;
  }
}

// Phone
@media (max-width: 490px) {
  .card-design {
    max-width: 100%;
    width: 100%;
    height: 20vh;
    max-height: 30%;
    margin-bottom: 2rem;
  }
}
</style>

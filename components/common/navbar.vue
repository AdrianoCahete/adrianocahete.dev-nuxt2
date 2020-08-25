<template>
  <section :class="$device.isMobile ? 'navbar navbarMobile' : 'navbar'">
    <section class="headerInfo">
      <nuxt-link to="/" exact>
        <whoAmI author-name="Adriano Cahete" job-title="" current-company="" />
      </nuxt-link>
    </section>
    <nav id="nav" class="menu">
      <nuxt-link to="/about">
        About
      </nuxt-link>
      <nuxt-link to="/ui">
        Interfaces
      </nuxt-link>
      <nuxt-link to="/projects">
        Projects
      </nuxt-link>
      <!-- <nuxt-link v-if="isDevMode" to="/debug">
        {{ this.$route.name }}
      </nuxt-link> -->
    </nav>
    <section class="links">
      <Icon :hide-mobile="true" url="https://linkedin.com/in/AdrianoCahete/" icon="linkedin" title="LinkedIn" />
      <Icon :hide-mobile="true" url="https://behance.net/AdrianoCahete/" icon="behance" title="Behance" />
      <Icon :hide-mobile="true" url="https://github.com/AdrianoCahete" icon="github" title="Github" />
      <!-- <Icon :hide-mobile="true" url="https://codepen.io/AdrianoCahete/" icon="codepen" title="CodePen" /> -->
      <Icon :hide-mobile="true" url="./resume-artifacts/[en-US]-Adriano_Cahete.pdf" icon="pdf" title="Resume" />
    </section>
  </section>
</template>

<script>
import whoAmI from '~/components/common/whoAmI'
import Icon from '~/components/common/Icon'

export default {
  components: {
    whoAmI,
    Icon
  },

  data () {
    return {
      isDevMode: process.env.NODE_ENV === 'development'
    }
  }
}
</script>

<style lang="stylus" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: var(--bgColor);
  background-attachment: fixed;
  background-size: 500% 500%;
  background-position: 0 50%;
  animation: gradient-2 1.5s ease-in-out 1;
  animation-fill-mode: forwards;
  width: 100%;
  padding: 0 2vw;
  height: 8vh;
  position sticky;
  top: 0;
  left: 0;
  border-bottom: var(--navbarBorder);
  color: var(--navColor);
  z-index: 2;

  @supports (backdrop-filter: blur(0px)) {
    backdrop-filter: blur(160px);
  }

  .headerInfo {
    opacity: 0;
    transition: .3s ease-in-out all;

    a {
      color: var(--navColorActive);
      text-decoration: none;

      &.nuxt-link-exact-active {
        pointer-events: none;
      }
    }

    &:not(.noAvatar) {
      animation: fadeIn .5s ease-in;
      animation-fill-mode: forwards;
    }
  }

  .menu {
    display: flex;
    height: 100%;
    align-items: center;
    animation: fromUp2Down .5s ease-in;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 400;
      height: 100%;
      padding: 0 2rem;
      cursor: pointer;
      color: var(--navColor);
      fill: var(--navColor);
      border-bottom: 3px solid transparent;

      &:hover {
        color: var(--navColorActive);
      }

      &:active,
      &.nuxt-link-exact-active {
        // font-weight: bold;
        border-bottom-color: currentColor;
        color: var(--navColorActive, rgba(255, 255, 255, 1));
        transition: .3s ease color;
        cursor: default;
        margin-bottom: -2px;
      }
    }
  }

  .links {
    animation: fromUp2Down .5s ease-in;

    a {
      color: var(--navColor);
      fill: currentColor;

      &:hover {
        color: var(--navColorActive, rgba(255, 255, 255, 1));
        fill: currentColor;
      }
    }
  }

  &.navbarMobile {
    &::before {
      display: none;
    }

    .links {
      animation: fromUp2Down .5s ease-in;
    }
  }
}

// Small Desktop
@media (max-width: 1024px) {
  .navbar {
    .menu {
      // justify-content: center;
    }

    .links {
      display: flex;
      align-items: center;
      height: 100%;

      a {
        display: flex;
        align-items: center;
        margin: 0;
        height: 100%;
        padding: 0 1vw;
      }
    }
  }
}

// Tablet
@media (max-width: 670px) {
  .headerInfo {
    // display: none;
  }

  .section {
    padding-left: 2vw;
  }

  .navbar {
    .menu {
      justify-content: right;
    }

    .links {
      display: none;
    }
  }
}

// Phone
@media (max-width: 490px) {
  .headerInfo {
    display: none;
  }

  .section {
    padding-left: 2vw;
  }

  .navbar {
    .menu {
      justify-content: center;
      width: 100%;
    }
  }
}
</style>

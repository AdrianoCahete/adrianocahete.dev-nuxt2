<template>
  <section :class="$device.isMobile ? 'navbar navbarMobile' : 'navbar'">
    <section class="headerInfo">
      <nuxt-link to="/" exact>
        <whoAmI author-name="Adriano Cahete" job-title="" current-company="" />
        <!-- Product Designer & User Interface Developer -->
      </nuxt-link>
    </section>
    <nav id="nav" class="menu">
      <!-- <nuxt-link to="/" exact>
        <span>Home</span>
      </nuxt-link> -->
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
      <Icon :hide-mobile="true" url="https://codepen.io/AdrianoCahete/" icon="codepen" title="CodePen" />
      <Icon :hide-mobile="true" url="./resume/[en-US]-Adriano_Cahete.pdf" icon="pdf" title="Resume" />
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
  animation: gradient-2 3s ease-in-out 1;
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
      color: var(--navColor);
      text-decoration: none;

      &.nuxt-link-exact-active {
        pointer-events: none;
      }
    }

    &:not(.noAvatar) {
      animation: fadeIn .5s ease-in;
      animation-fill-mode: forwards;
    }

    &.noAvatar {
      opacity: 0;
      pointer-events none;
      transition: 1s ease-in-out opacity;
    }
  }

  .menu {
    display: flex;
    height: 100%;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      text-transform: uppercase;
      height: 100%;
      padding: 0 2rem;
      cursor: pointer;
      color: var(--navColor);
      fill: var(--navColor);
      animation: fromUp2Down .5s ease-in;
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
    fill: var(--navbarIconColor, #ffffff);
    animation: fromDown2Up .5s ease-in;
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

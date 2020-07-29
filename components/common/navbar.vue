<template>
  <section :class="$device.isMobile ? 'navbar navbarMobile' : 'navbar'">
    <section class="headerInfo" :class="showAvatar ? '' : ' noAvatar'">
      <userAvatar user-name="AdrianoCahete" />
      <!-- TODO: Move to Component -->
      <h1>Adriano Cahete</h1>
      <p>Product Designer & User Interface Developer</p>
      <!-- <p>currently working at SAI Global</p> -->
    </section>
    <nav id="nav" class="menu">
      <!-- https://br.vuejs.org/v2/guide/syntax.html#Parametros -->
      <!-- TODO: Move Home to Icon instead of text and remove isHidden -->
      <nuxt-link to="/" exact>
        Home
      </nuxt-link>
      <!-- <nuxt-link v-else-if="$device.isMobile" to="/" exact>
        <Icon icon="home" title="Home" />
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
        Debug
      </nuxt-link> -->
    </nav>
    <section class="links">
      <Icon url="https://linkedin.com/in/AdrianoCahete/" icon="linkedin" title="LinkedIn" />
      <Icon :hide-mobile="true" url="https://behance.net/AdrianoCahete/" icon="behance" title="Behance" />
      <Icon :hide-mobile="true" url="https://github.com/AdrianoCahete" icon="github" title="Github" />
      <Icon :hide-mobile="true" url="https://codepen.io/AdrianoCahete/" icon="codepen" title="CodePen" />
      <!--
        <feature-toggle name="gaming" :value="false" prefix="_t">
          <Icon url="" icon="steam" title="" />
        </feature-toggle>
      -->
      <Icon url="./resume/[en-US]-Adriano_Cahete__2020.06.pdf" icon="pdf" title="Resume" /> <!-- TODO: Update when update static file -->
    </section>
  </section>
</template>

<script>
import userAvatar from '~/components/common/userAvatar.vue'
import Icon from '~/components/common/Icon.vue'

export default {
  components: {
    userAvatar,
    Icon
  },

  props: {
    showAvatar: {
      type: Boolean,
      required: false,
      default: false
    }
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 20vw; // Move to Vars
  padding: 0 2vw;
  max-width: 20%;
  min-height: 100%;
  height: 100vh;
  position fixed;
  top: 0;
  left: 0;
  background-color: var(--navbarColor);
  border-right: var(--navbarBorder);

  @supports (backdrop-filter: blur(0px)) {
    backdrop-filter: blur(160px);
  }

  @supports not (backdrop-filter: blur(0px)) {
    &::before {
      display: flex;
      content: "";
      background: rgba(0, 0, 0, .1);
      filter: blur(4px);
      height: 100%;
      position: fixed; // Sticky bugs desktop version
      width: 20vw;
      z-index: -1;
    }
  }

  .headerInfo {
    opacity: 0;

    &:not(.noAvatar) {
      animation: fadeIn .5s ease-in;
      animation-fill-mode: forwards;
    }

    p {
      font-size: 1.3rem;
    }

    &.noAvatar {
      opacity: 0;
      pointer-events none;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    width: 100%;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      text-transform: uppercase;
      height: 3rem;
      cursor: pointer;
      color: var(--navColor);
      fill: var(--navColor);
      animation: fromUp2Down .5s ease-in;

      &:hover {
        color: var(--navColorHover);
      }

      &:active,
      &.nuxt-link-exact-active {
        font-weight: bold;
        color: var(--textColor, rgba(255, 255, 255, .5));
        transition: .3s ease color;
        cursor: default;
      }
    }
  }

  .links {
    margin-top: 2vh;
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
    flex-direction: row;
    width: 100%;
    max-width: @width;
    height: 40px; // TODO: Move to vars
    padding: 0 1vw;
    position: sticky;
    text-align: start;
    background-image: linear-gradient(180deg, #212121 0%, #212121 10%, var(--bgColor) 100%);

    &::before {
      display: none;
    }

    .headerInfo {
      font-weight: normal;
      white-space: nowrap;

      p {
        display: none;
      }
    }

    .menu {
      flex-direction: row;
      justify-content: center;
      width: 100%;

      a {
        height: 40px; // TODO: Get from vars
        padding: 0 2vw;
      }
    }

    .links {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 0;

      a {
        display: flex;
        align-items: center;
        margin: 0;
        height: 40px; // TODO: Get from vars
        padding: 0 1vw;
      }
    }
  }
}

// Tablet
@media (max-width: 670px) {
  .headerInfo {
    display: none;
  }

  .section {
    padding-left: 2vw;
  }

  .navbar {
    .menu {
      justify-content: left;
      overflow: auto;
    }

    .links a {
      &.hideSmall {
        display: none;
      }
    }
  }
}

// Phone
@media (max-width: 390px) {
  .section {
    padding-left: 2vw;
  }

  .navbar {
    .menu {
      justify-content: left;
    }
  }
}
</style>

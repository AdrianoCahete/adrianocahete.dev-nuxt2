<template>
  <section :class="$device.isMobile ? 'navbar navbarMobile' : 'navbar'">
    <section class="headerInfo">
      <userAvatar user-name="AdrianoCahete" />
      <!-- TODO: Move to Component -->
      <h1>Adriano Cahete</h1>
      <p>Product Designer & User Interface Developer</p>
      <!-- <p>currently working at SAI Global</p> -->
    </section>
    <nav id="nav" class="menu">
      <!-- https://br.vuejs.org/v2/guide/syntax.html#Parametros -->
      <!-- TODO: Fix scroll clipping part of menu on mobile -->
      <!-- TODO: Move Home to Icon instead of text and remove isHidden -->
      <nuxt-link to="/" :class="$device.isMobile ? 'isIcon' : ''">
        Home
      </nuxt-link>
      <nuxt-link to="/work">
        Work
      </nuxt-link>
      <nuxt-link to="/skills">
        Skills
      </nuxt-link>
      <nuxt-link to="/projects">
        Projects
      </nuxt-link>
      <nuxt-link to="/ui">
        Interfaces
      </nuxt-link>
      <nuxt-link v-if="isDevMode" to="/test">
        Error
      </nuxt-link>
      <!-- <nuxt-link v-if="isDevMode" to="/writings">
        Writings
      </nuxt-link> -->
    </nav>
    <section class="links">
      <svgLinks url="https://linkedin.com/in/AdrianoCahete/" icon="linkedin" title="LinkedIn" />
      <svgLinks url="https://behance.net/AdrianoCahete/" icon="behance" title="Behance" />
      <svgLinks :hide-mobile="true" url="https://github.com/AdrianoCahete" icon="github" title="Github" />
      <svgLinks :hide-mobile="true" url="https://codepen.io/AdrianoCahete/" icon="codepen" title="CodePen" />
      <!--
        <feature-toggle name="gaming" :value="false" prefix="_t">
          <svgLinks url="" icon="steam" title="" />
        </feature-toggle>
      -->
      <svgLinks url="./resume/Resume-Adriano_Cahete__en-US_2020.05.pdf" icon="pdf" title="Resume" /> <!-- TODO: Update when update static file -->
    </section>
    <section v-if="isDevMode" class="isDevMode">
      <svgLinks :hide-mobile="true" url="https://app.netlify.com/sites/adrianocahete-dev/deploys?filter=master" icon="oss" title="Deploy @ Netlify" />
    </section>
    <!-- TODO: Fix flex disposition of about section -->
    <section class="about" style="display: none">
      <svgLinks url="https://github.com/AdrianoCahete/adrianocahete.dev" icon="github" title="This site is OpenSourced @ Github" />
    </section>
  </section>
</template>

<script>
import userAvatar from '~/components/common/userAvatar.vue'
import svgLinks from '~/components/common/svgLinks.vue'

export default {
  components: {
    userAvatar,
    svgLinks
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

  .headerInfo {
    animation: fadeIn .5s ease-in;

    p {
      font-size: 1.3rem;
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
      color: var(--navColor);
      animation: fromUp2Down .5s ease-in;

      &:hover {
        color: var(--navColorHover);
      }

      &:active,
      &.nuxt-link-exact-active {
        font-weight: bold;
        color: var(--primaryColor, rgba(255, 255, 255, .5));
        transition: .3s ease color;
      }

      // &.isIcon {
      //   font-size: 0; // TODO: Move to Icon instead of text
      // }
    }
  }

  .links {
    margin-top: 2vh;
    fill: var(--navbarIconColor, #ffffff);
    animation: fromDown2Up .5s ease-in;
  }

  &.navbarMobile {
    background-color: var(--scrollbarColor);

    &::before {
      display: none; // TODO: Fix the blur on mobile
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
      display: none; // TODO: Fix the blur on mobile
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

    // .links {
    //   // TODO: Add some gradient to give impression of higher z plane
    // }
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

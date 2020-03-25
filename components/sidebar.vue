<template>
  <section class="sidebar">
    <section class="headerInfo">
      <userAvatar user-name="AdrianoCahete" />
      <!-- TODO: Move to Component -->
      <h1>Adriano Cahete</h1>
      <p>User Interface Developer, User Interface & User Experience Designer</p>
      <p>currently working at SAI Global</p>
    </section>
    <nav id="nav" class="menu">
      <!-- <a href="#home" @click="newTitle = !newTitle" :class="{'active': isActive}">Home</a> -->
      <!-- https://br.vuejs.org/v2/guide/syntax.html#Parametros -->
      <a href="#home" class="is-active">Home</a>
      <a href="#work"> Work</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <!-- <a href="#writings">Writings</a> -->
    </nav>
    <section class="links">
      <svgLinks url="https://github.com/AdrianoCahete" icon="github" title="Github" />
      <svgLinks url="https://linkedin.com/in/AdrianoCahete/" icon="linkedin" title="LinkedIn" />
      <svgLinks url="https://codepen.io/AdrianoCahete/" icon="codepen" title="CodePen" />
      <svgLinks url="./Resume-Adriano_Cahete__en_US_2020.03.pdf" icon="pdf" title="Resume" /> <!-- TODO: Update when update static file -->
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
  }
}
</script>

<style lang="stylus" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 20vw; // Move to Vars
  padding: 5vh 3vw;
  max-width: 20%;
  min-height: 100%;
  height: 100vh;
  position fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(90deg, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 10%, var(--bgColor) 100%);

  .headerInfo {
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

      &:hover {
        text-decoration: underline;
      }

      &:active,
      &.is-active {
        text-decoration: underline;
        color: var(--primaryColor, rgba(255, 255, 255, .5));
        transition: .3s ease color;
      }
    }
  }

  .links {
    margin-top: 2vh;
    fill: var(--textColor, #ffffff);
  }
}
</style>

<template>
  <section class="sidebar">
    <section class="headerInfo">
      <userAvatar user-name="AdrianoCahete" />
      <h1>Adriano Cahete</h1>
      <p>User Interface Developer, User Interface & User Experience Designer</p>
      <p>currently working at SAI Global</p>
    </section>
    <nav class="menu">
      <!-- <a href="#home" @click="newTitle = !newTitle" :class="{'active': isActive}">Home</a> -->
      <!-- https://br.vuejs.org/v2/guide/syntax.html#Parametros -->
      <a href="#home">Home</a>
      <a href="#work"> Work</a>
      <a href="#projects">Projects</a>
      <!-- <a href="#writings">Writings</a> -->
    </nav>
    <section class="links">
      <a href="#" target="_blank">G</a>
      <a href="#" target="_blank">L</a>
    </section>
  </section>
</template>

<script>
import userAvatar from '~/components/userAvatar.vue'

export default {
  // layout: 'blog'
  components: {
    userAvatar
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

    a {
      text-decoration: none;
      text-transform: uppercase;

      &:hover {
        text-decoration: underline;
      }

      &:active,
      &.active {
        text-decoration: underline;
      }
    }
  }

  .links {
    margin-top: 2vh;
  }
}
</style>

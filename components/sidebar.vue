<template>
  <section class="sidebar">
    <section class="headerInfo">
      <div>Photo</div>
      <h1>Name</h1>
      <p>Info</p>
    </section>
    <nav class="menu">
      <a href="#home" @click="newTitle = !newTitle">Home</a>
      <a href="#work">Work</a>
      <a href="#projects">Projects</a>
      <!-- <a href="#writings">Writings</a> -->
    </nav>
    <section class="links">
      Links
    </section>
  </section>
</template>

<script>
export default {
  // layout: 'blog'
}
</script>

<style lang="stylus" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 20vw; // Move to Vars
  max-width: 20%;
  height: 100vh;
  position fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(90deg, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 10%, var(--bgColor) 100%);

  .menu {
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      &:active,
      &.active {
        text-decoration: underline;
      }
    }
  }
}
</style>

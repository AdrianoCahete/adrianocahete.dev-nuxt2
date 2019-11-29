<template>
  <div class="sidebar">
    <div class="headerInfo">
      <div>Photo</div>
      <h1>Name</h1>
      <p>Info</p>
    </div>
    <div class="menu">
      <a href="#home" @click="newTitle = !newTitle">Home</a>
      <a href="#work">Work</a>
      <a href="#projects">Projects</a>
      <a href="#writings">Writings</a>
    </div>
    <div class="links">
      Links
    </div>
  </div>
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
  width: 20vw;
  max-width: 20%;
  height: 100vh;
  position sticky;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, rgba(33, 33, 33, .5) 0%, rgba(57, 57, 57, .5) 50%, var(--bgColor) 100%);

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

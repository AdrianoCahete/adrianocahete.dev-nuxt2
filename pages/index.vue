<template>
  <div>
    <sidebar-menu />
    <div class="container">
      <div>
        <logo />
        <h1 class="title">
          adrianocahete.dev
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import sidebarMenu from '~/components/sidebar'

export default {
  components: {
    Logo,
    sidebarMenu
  }
}
</script>

<style lang="stylus">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>

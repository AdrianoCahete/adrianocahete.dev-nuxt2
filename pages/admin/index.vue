<template>
  <section class="page">
    <section class="content" style="margin-left: auto">
      <section id="nopelandia" class="section isCentered">
        <p>Not a default CMS site, sorry about that. :)</p>
        <nuxt-link to="/"> Back to safe house... </nuxt-link>
      </section>
    </section>
  </section>
</template>

<script>
definePageMeta({
   layout: 'error'
})
</script>

<style lang="scss" scoped>
@import "~assets/styles/components/section.scss";
</style>

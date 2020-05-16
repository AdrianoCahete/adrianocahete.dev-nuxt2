<template>
  <section class="content">
    <pageWork />
    <pageSkills />
    <pageProjects />
    <!-- <section id="writings" class="section"></section> -->
  </section>
</template>

<script>
import pageProjects from '~/components/pageComponents/projects.vue'
import pageSkills from '~/components/pageComponents/skills.vue'

export default {
  // layout: 'blog'
  components: {
    pageProjects,
    pageSkills
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'
</style>

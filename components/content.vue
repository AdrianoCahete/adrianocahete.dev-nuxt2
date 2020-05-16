<template>
  <section class="content">
    <pageHome />
    <pageWork />
    <pageSkills />
    <pageProjects />
    <!-- <section id="writings" class="section"></section> -->
  </section>
</template>

<script>
import pageHome from '~/components/pageComponents/home.vue'
import pageWork from '~/components/pageComponents/work.vue'
import pageProjects from '~/components/pageComponents/projects.vue'
import pageSkills from '~/components/pageComponents/skills.vue'

export default {
  // layout: 'blog'
  components: {
    pageHome,
    pageWork,
    pageProjects,
    pageSkills
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'
</style>

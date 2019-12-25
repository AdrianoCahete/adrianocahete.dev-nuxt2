<template>
  <div class="content">
    <pageHome />
    <pageWork />
    <pageProjects />

    <!-- TODO: Move to components -->
    <!--
      <section id="writings" class="section">
      writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings
      writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings
      writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings
      writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings
      writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings
      writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings
      writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings
      writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings
      writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings
      writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings writings
    </section> -->
  </div>
</template>

<script>
import pageHome from '~/components/pageComponents/home.vue'
import pageWork from '~/components/pageComponents/work.vue'
import pageProjects from '~/components/pageComponents/projects.vue'

export default {
  // layout: 'blog'
  components: {
    pageHome,
    pageWork,
    pageProjects
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl';

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-left: 20vw; // Get from vars
  width: 80vw;
  scroll-snap-type: y mandatory;
  scroll-snap-align: start;
}
</style>

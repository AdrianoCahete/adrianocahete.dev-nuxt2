<template>
  <div class="content">
    <pageHome />
    <section id="work" class="section">
      <h1 class="title">Work Experience</h1>
      <p class="description">I have over 9 years of experience in UI/UX design, UI Development and know the basics of a few Front End and Backend languages</p>

      <div class="card">
        <h2 class="cardTitle">Company 1</h2>
        <h3 class="cardSubTitle">Work Position</h3>
        <ul class="cardItems">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </div>

      <div class="card">
        <h2 class="cardTitle">Company 2</h2>
        <h3 class="cardSubTitle">Work Position</h3>
        <ul class="cardItems">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </div>

    </section>
    <section id="projects" class="section">
      <div class="card">
        <h2 class="cardTitle">Project 001</h2>
        <h3 class="cardSubTitle">This website?</h3>
        <ul class="cardItems">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </div>

      <div class="card">
        <h2 class="cardTitle">Project 002</h2>
        <h3 class="cardSubTitle">past work</h3>
        <ul class="cardItems">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </div>
    </section>
    <!-- <section id="writings" class="section">
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

export default {
  // layout: 'blog'
  components: {
    pageHome
  },
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

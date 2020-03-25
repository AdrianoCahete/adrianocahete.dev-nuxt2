<template>
  <section id="projects" class="section">
    <h1 class="title">
      Projects
    </h1>
    <div class="card">
      <h2 class="cardTitle">
        This portfolio
      </h2>
      <h3 class="cardSubTitle">
        Made with NuxtJS (VueJS) and auto deployed from Netlify.
      </h3>
      <ul class="cardItems">
        <li>Scoped styles</li>
        <li>Vue Components</li>
        <li>CSS Custom Variables</li>
      </ul>
    </div>

    <div class="card">
      <h2 class="cardTitle">
        Webfont Generator CLI
        <!-- <a href="https://github.com/AdrianoCahete/webfont-generator-cli" /> -->
      </h2>
      <h3 class="cardSubTitle">
        Forked from a somewhat abondoned tool to generate font-icons from SVG's for use in some work projects.
      </h3>
      <ul class="cardItems">
        <li>Fixed major issues from original repository</li>
        <li>Tested and merged Pull Requests from original repository</li>
        <li>Updated documentation to match the actual implementation</li>
      </ul>
    </div>

    <div class="card">
      <h2 class="cardTitle">
        Better Adrena
      </h2>
      <!-- <a href="https://github.com/AdrianoCahete/AdrenalineLight" /> -->
      <h3 class="cardSubTitle">
        Chrome/Firefox extension to add new functionalities to a brazilian forum
      </h3>
      <ul class="cardItems">
        <li>Applied some styles to make the UI more readable</li>
        <li>Added another styles and js to create some useful features</li>
      </ul>
    </div>

    <div class="card minor">
      <h2 class="cardTitle">
        [Minor] Google Chrome Lighthouse
      </h2>
      <h3 class="cardSubTitle">
        Small fixes for CLI version of Chrome Lighthouse on Windows
      </h3>
      <!-- <a href="https://github.com/GoogleChrome/lighthouse/pull/1307" /> -->
      <ul class="cardItems">
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>

    <div class="card minor">
      <h2 class="cardTitle">
        [Minor] RocketChat
      </h2>
      <!-- <a href="https://github.com/RocketChat/Rocket.Chat/pulls?q=is%3Apr+sort%3Aupdated-desc+is%3Aclosed+author%3AAdrianoCahete" /> -->
      <h3 class="cardSubTitle">
        Updates on stylesheet architechure and some small UI fixes across project
      </h3>
      <ul class="cardItems">
        <li>Better organization for stylesheets/css variables</li>
        <li>A few small fixes for Ui issues</li>
        <li>UX/UI definitions and implementation for ChatOps feature</li>
      </ul>
    </div>

    <div class="card">
      <h2 class="cardTitle">
        Project 006
      </h2>
      <h3 class="cardSubTitle">
        past work
      </h3>
      <ul class="cardItems">
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>

    <div class="card">
      <h2 class="cardTitle">
        Project 007
      </h2>
      <h3 class="cardSubTitle">
        past work
      </h3>
      <ul class="cardItems">
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  // layout: 'blog'
  components: {
  },

  head () {
    return {
      // title: 'Projects',
      // meta: [
      // ],
      // bodyAttrs: {
      //   class: 'work'
      // }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/styles/components/card.styl'
</style>

<template>
  <section id="projects" class="section">
    <h1 class="title">
      Projects
    </h1>
    <p class="description">
      Almost all of UI's that I made these years are under a NDA, so I'm working to make them availiable here with stakeholders permissions.
    </p>
    <div class="card">
      <h2 class="cardTitle">
        This portfolio
      </h2>
      <!-- <a href="https://github.com/AdrianoCahete/adrianocahete.dev" /> -->
      <h3 class="cardSubTitle">
        Made with NuxtJS (VueJS) and auto deployed on Netlify
      </h3>
      <a href="https://app.netlify.com/sites/adrianocahete-dev/deploys" target="_blank" rel="nofollow,noopener,external">
        <img src="https://api.netlify.com/api/v1/badges/bffddeca-83de-4641-807a-ac12aa617fae/deploy-status" alt="Netlify Status">
      </a>
      <ul class="cardItems">
        <li>Scoped styles</li>
        <li>Vue Components</li>
        <li>CSS Custom Variables</li>
      </ul>
    </div>

    <div class="card">
      <h2 class="cardTitle">
        Webfont Generator CLI
      </h2>
      <!-- <a href="https://github.com/AdrianoCahete/webfont-generator-cli" /> -->
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

    <div class="card">
      <h2 class="cardTitle">
        RocketChat
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

    <div class="card minor">
      <h2 class="cardTitle">
        [Minor] Google Chrome Lighthouse
      </h2>
      <!-- <a href="https://github.com/GoogleChrome/lighthouse/pull/1307" /> -->
      <h3 class="cardSubTitle">
        Small fixes for CLI
      </h3>
      <ul class="cardItems">
        <li>Fixes on CLI version on Windows OS</li>
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

  .title {
    display: block;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .description {
    margin-top: 1rem;
    margin-bottom: @margin-top;
  }
</style>

<template>
  <section id="projects" class="section">
    <h1 class="title">
      Projects
    </h1>
    <p class="description">
      Most UIs created by me over the last years are under a non-disclosure agreement, so I'm working with stakeholders to obtain their permission to make them publicly available.
    </p>

    <div class="card">
      <h2 class="cardTitle">
        This portfolio <svgLinks url="https://github.com/AdrianoCahete/adrianocahete.dev" icon="oss" title="adrianocahete.dev @ Github" class="cardLink-Item" />
      </h2>
      <h3 class="cardSubTitle">
        Made with NuxtJS (VueJS) and auto deployed on Netlify
      </h3>
      <div class="cardLinks">
        <a href="https://app.netlify.com/sites/adrianocahete-dev/deploys" target="_blank" rel="nofollow,noopener,external">
          <img src="https://api.netlify.com/api/v1/badges/bffddeca-83de-4641-807a-ac12aa617fae/deploy-status" alt="Netlify Status">
        </a>
      </div>
      <ul class="cardItems">
        <li>Scoped styles</li>
        <li>Vue Components</li>
        <li>CSS Custom Properties</li>
        <li>Dark and Light Themes (<a href="https://stackoverflow.com/a/59223868/1032384" target="_blank" rel="nofollow,noopener,external">Try it!</a>)</li>
      </ul>
    </div>

    <div class="card">
      <h2 class="cardTitle">
        Webfont Generator CLI
        <svgLinks url="https://github.com/AdrianoCahete/webfont-generator-cli" icon="link" title="webfont-generator-cli @ Github" class="cardLink-Item" />
      </h2>
      <h3 class="cardSubTitle">
        Forked a somewhat abandoned tool to generate font-icons from SVGs for use in some work projects.
      </h3>
      <ul class="cardItems">
        <li>Fixed major issues from the original repository</li>
        <li>Tested and merged Pull Requests from original repository</li>
        <li>Updated documentation to match the current implementation</li>
      </ul>
    </div>

    <div class="card">
      <h2 class="cardTitle">
        Better Adrena
        <svgLinks url="https://github.com/AdrianoCahete/AdrenalineLight" icon="link" title="BetterAdrena @ Github" class="cardLink-Item" />
      </h2>
      <h3 class="cardSubTitle">
        Chrome/Firefox extension to add new functionalities to a Brazilian forum
      </h3>
      <ul class="cardItems">
        <li>Applied some styles to make the UI more readable</li>
        <li>Added more styles and js content to create some useful features</li>
      </ul>
    </div>

    <div class="card">
      <h2 class="cardTitle">
        RocketChat
        <svgLinks url="https://github.com/RocketChat/Rocket.Chat/search?q=AdrianoCahete&type=Commits" icon="link" title="RocketChat @ Github" class="cardLink-Item" />
      </h2>
      <h3 class="cardSubTitle">
        Updated the stylesheet architecture and made some small UI fixes across the project
      </h3>
      <ul class="cardItems">
        <li>Better organization for stylesheets/css variables</li>
        <li>A few small fixes for UI issues</li>
        <li>UX/UI definitions and implementation for ChatOps feature</li>
      </ul>
    </div>

    <div class="card minor">
      <h2 class="cardTitle">
        [Minor] Google Chrome Lighthouse
        <svgLinks url="https://github.com/GoogleChrome/lighthouse/blob/468c10bb9df7ded215b7a3c47e23f48c1af656f7/changelog.md#new-contributors-24" icon="link" title="Google Chrome Lighthouse @ Github" class="cardLink-Item" />
      </h2>
      <!-- <a href="https://github.com/GoogleChrome/lighthouse/pull/1307" /> -->
      <h3 class="cardSubTitle">
        Small fixes for CLI
      </h3>
      <ul class="cardItems">
        <li>Fixes on CLI version on Windows OS</li>
      </ul>
    </div>
    <!-- <section>
      <button
        class="btn"
        @click="openModal"
      >
        Open Modal
      </button>
      <modal>
        teste
      </modal>
    </section> -->
  </section>
</template>

<script>
import svgLinks from '~/components/common/svgLinks.vue'
// import modal from '~/components/common/modal.vue'

export default {
  // layout: 'blog'
  components: {
    svgLinks
    // modal
  },

  // methods: {
  //   openModal () {
  //     this.$modal.show(modal, {
  //       text: 'This text is passed as a property'
  //     })
  //   }
  // },

  head () {
    return {
      // title: 'Projects',
      // meta: [],
      // bodyAttrs: {class: 'work'}
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

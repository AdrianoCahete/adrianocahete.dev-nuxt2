<template>
  <section :class="$device.isMobile || $device.isTablet ? 'page isMobile' : 'page'">
    <navbar-menu show-avatar />
    <section class="content">
      <section id="projects" class="section">
        <div class="card">
          <h2 class="cardTitle">
            This portfolio <Icon url="https://github.com/AdrianoCahete/adrianocahete.dev" icon="oss" title="adrianocahete.dev @ Github" class="cardLink-Item" />
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
            <!-- <li>Dark and Light Themes (<a href="https://stackoverflow.com/a/59223868/1032384" target="_blank" rel="nofollow,noopener,external">Try it!</a>)</li> -->
          </ul>
        </div>

        <div class="card">
          <h2 class="cardTitle">
            Webfont Generator CLI
            <Icon url="https://github.com/AdrianoCahete/webfont-generator-cli" icon="link" title="webfont-generator-cli @ Github" class="cardLink-Item" />
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
            <Icon url="https://github.com/AdrianoCahete/AdrenalineLight" icon="link" title="BetterAdrena @ Github" class="cardLink-Item" />
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
            <Icon url="https://github.com/RocketChat/Rocket.Chat/search?q=AdrianoCahete&type=Commits" icon="link" title="RocketChat @ Github" class="cardLink-Item" />
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
            <Icon url="https://github.com/GoogleChrome/lighthouse/blob/468c10bb9df7ded215b7a3c47e23f48c1af656f7/changelog.md#new-contributors-24" icon="link" title="Google Chrome Lighthouse @ Github" class="cardLink-Item" />
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
    </section>
  </section>
</template>

<script>
import navbarMenu from '~/components/common/navbar'
import Icon from '~/components/common/Icon.vue'

export default {
  // layout: 'blog'
  components: {
    navbarMenu,
    Icon
    // modal
  },
  head () {
    return {
      title: 'Projects',
      meta: [
      ]
      // bodyAttrs: {
      //   class: 'test123'
      // }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'
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

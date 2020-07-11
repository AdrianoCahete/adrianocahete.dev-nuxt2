<template>
  <section class="page">
    <navbar-menu show-avatar />
    <section class="content">
      <section id="projects" class="section">
        <Card
          animation-delay="0.1"
          title="This portfolio"
          subtitle="Made with NuxtJS (VueJS) and auto deployed on Netlify"
          url="https://github.com/AdrianoCahete/adrianocahete.dev"
          icon="oss"
          tooltip="adrianocahete.dev @ Github"
          support-link="https://app.netlify.com/sites/adrianocahete-dev/deploys"
          support-img="https://api.netlify.com/api/v1/badges/bffddeca-83de-4641-807a-ac12aa617fae/deploy-status"
          support-tooltip="Netlify Status"
        >
          <li>Scoped styles</li>
          <li>Vue Components</li>
          <li>CSS Custom Properties</li>
          <!-- <li>Dark and Light Themes (<a href="https://stackoverflow.com/a/59223868/1032384" target="_blank" rel="nofollow,noopener,external">Try it!</a>)</li> -->
        </Card>

        <Card
          animation-delay="0.3"
          title="Webfont Generator CLI"
          subtitle="Forked a somewhat abandoned tool to generate font-icons from SVGs for use in some work projects"
          url="https://github.com/AdrianoCahete/webfont-generator-cli"
          tooltip="webfont-generator-cli @ Github"
        >
          <li>Fixed major issues from the original repository</li>
          <li>Tested and merged Pull Requests from original repository</li>
          <li>Updated documentation to match the current implementation</li>
        </Card>

        <Card
          animation-delay="0.5"
          title="Better Adrena"
          subtitle="Chrome/Firefox extension to add new functionalities to a Brazilian forum"
          url="https://github.com/AdrianoCahete/AdrenalineLight"
          tooltip="BetterAdrena @ Github"
        >
          <li>Applied some styles to make the UI more readable</li>
          <li>Added more styles and js content to create some useful features</li>
        </Card>

        <Card
          animation-delay="0.7"
          title="RocketChat"
          subtitle="Updated the stylesheet architecture and made some small UI fixes across the project"
          url="https://github.com/RocketChat/Rocket.Chat/search?q=AdrianoCahete&type=Commits"
          tooltip="RocketChat @ Github"
        >
          <li>Better organization for stylesheets/css variables</li>
          <li>A few small fixes for UI issues</li>
          <li>UX/UI definitions and implementation for ChatOps feature</li>
        </Card>

        <Card
          animation-delay="1"
          title="Detect.JS"
          subtitle="Keeping the library updated with the latest browsers at the time"
          url="https://github.com/darcyclarke/Detect.js"
          tooltip="Detect.JS @ Github"
        >
          <li>Added detection of Edge, Opera, Internet Explorer 10/11 and some mobile browsers</li>
          <li>Added detection of some new Operational Systems</li>
        </Card>

        <Card
          animation-delay="1.3"
          title="Google Chrome Lighthouse"
          subtitle="Small fixes for CLI"
          url="https://github.com/GoogleChrome/lighthouse/blob/468c10bb9df7ded215b7a3c47e23f48c1af656f7/changelog.md#new-contributors-24"
          tooltip="Google Chrome Lighthouse @ Github"
          is-minor
        >
          <li>Fixes on CLI version on Windows OS</li>
          <!-- <a href="https://github.com/GoogleChrome/lighthouse/pull/1307" /> -->
        </Card>
      </section>
    </section>
  </section>
</template>

<script>
import navbarMenu from '~/components/common/navbar'
import Card from '~/components/common/card.vue'

export default {
  components: {
    navbarMenu,
    Card
  },
  head () {
    return {
      title: 'Projects'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'

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

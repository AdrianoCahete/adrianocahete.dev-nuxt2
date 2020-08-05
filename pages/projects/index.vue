<template>
  <section class="page">
    <section class="content">
      <section id="projects" class="section">
        <Card
          animation-delay="0.1"
          title="This portfolio"
          subtitle="Made with NuxtJS (VueJS), with constant updates and auto deployed on Netlify"
          url="https://github.com/AdrianoCahete/adrianocahete.dev"
          icon="oss"
          tooltip="adrianocahete.dev @ Github"
          support-link="https://app.netlify.com/sites/adrianocahete-dev/deploys"
          support-img="https://api.netlify.com/api/v1/badges/bffddeca-83de-4641-807a-ac12aa617fae/deploy-status"
          support-tooltip="Netlify Status"
          :items="[
            {name: 'Auto-deploy from Github'},
            {name: 'Scoped styles'},
            {name: 'Vue Components'},
            {name: 'CSS Custom Properties'},
            {name: 'Works offline'},
          ]"
        />

        <Card
          animation-delay="0.3"
          title="Webfont Generator CLI"
          subtitle="Forked a somewhat abandoned tool to generate font-icons from SVGs for use in some work projects"
          url="https://github.com/AdrianoCahete/webfont-generator-cli"
          tooltip="webfont-generator-cli @ Github"
          :items="[
            {name: 'Fixed problems from original repository'},
            {name: 'Updated documentation to match the current implementation'}
          ]"
        />

        <Card
          animation-delay="0.5"
          title="Simple Badges"
          subtitle="Simple Badges for Github profiles"
          url="https://github.com/AdrianoCahete/SimpleBadges"
          tooltip="Simple Badges @ Github"
          :items="[
            {name: 'Some generic SVG badges to use in Github README'}
          ]"
        />

        <Card
          animation-delay="0.7"
          title="Better Adrena"
          subtitle="Chrome/Firefox extension to add new functionalities to a Brazilian forum"
          url="https://github.com/AdrianoCahete/AdrenalineLight"
          tooltip="BetterAdrena @ Github"
          :items="[
            {name: 'Applied some styles to make the UI more readable'},
            {name: 'Added more styles and js content to create some useful features'}
          ]"
        />

        <Card
          animation-delay="0.9"
          title="RocketChat"
          subtitle="Updated the stylesheet architecture and made some small UI fixes across the project"
          url="https://github.com/RocketChat/Rocket.Chat/search?q=AdrianoCahete&type=Commits"
          tooltip="RocketChat @ Github"
          :items="[
            {name: 'Built and shipped the Ui for ChatOps feature'},
            {name: 'A few small fixes for UI issues'},
            {name: 'Better organization for stylesheets/css variables'},
          ]"
        />

        <Card
          animation-delay="1"
          title="Detect.JS"
          subtitle="Keeping the library updated with the latest browsers at the time"
          url="https://github.com/darcyclarke/Detect.js"
          tooltip="Detect.JS @ Github"
          :items="[
            {name: 'Added detection of Edge, Opera, Internet Explorer 10/11 and some mobile browsers'},
            {name: 'Added detection of some new Operational Systems'}
          ]"
        />

        <Card
          animation-delay="1.3"
          title="Google Chrome Lighthouse"
          subtitle="Small fixes for CLI"
          url="https://github.com/GoogleChrome/lighthouse/blob/468c10bb9df7ded215b7a3c47e23f48c1af656f7/changelog.md#new-contributors-24"
          tooltip="Google Chrome Lighthouse @ Github"
          :items="[
            {name: 'Fixes on CLI version on Windows OS'}
          ]"
          is-minor
        />
        <!-- <a href="https://github.com/GoogleChrome/lighthouse/pull/1307" /> -->
      </section>
    </section>
  </section>
</template>

<script>
import Card from '~/components/common/card'

export default {
  components: {
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

.description {
  margin-top: 1rem;
  margin-bottom: @margin-top;
}
</style>

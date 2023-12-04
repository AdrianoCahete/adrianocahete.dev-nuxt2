<template>
  <section class="content">
    <section id="projects" class="section-simple">
      <h1>Projects</h1>
      <p class="description">
        Some projects and experiments that I directly made or being part of.
      </p>
      <section class="grid">
        <designCard
          animation-delay="0.1"
          title="phpMyAdmin Website"
          subtitle="Redesign and brand update to phpMyAdmin project"
          url="https://github.com/phpmyadmin/website/pull/137"
          tooltip="phpMyAdmin @ Github"
          data-theme="1"
          :items="[
            { name: 'Update brand to 2020' },
            { name: 'Redesign site to have a more up-to-date visuals' },
          ]"
        />

        <designCard
          animation-delay="0.3"
          title="Google Chrome Lighthouse"
          subtitle="Automated auditing, performance metrics, and best practices for the web."
          url="https://github.com/GoogleChrome/lighthouse/blob/468c10bb9df7ded215b7a3c47e23f48c1af656f7/changelog.md#new-contributors-24"
          tooltip="Google Chrome Lighthouse @ Github"
          data-theme="2"
          :items="[{ name: 'Fixes on CLI version on Windows OS' }]"
          self-made
        />

        <designCard
          animation-delay="0.5"
          title="RocketChat"
          subtitle="Made some Product Design decisions, updated the stylesheet architecture and made some small UI fixes."
          url="https://github.com/RocketChat/Rocket.Chat/"
          tooltip="RocketChat @ Github"
          data-theme="3"
          :items="[
            { name: 'Built and shipped the Ui for ChatOps feature' },
            { name: 'A few small fixes for UI issues' },
            { name: 'Better organization for stylesheets/css variables' },
          ]"
        />

        <designCard
          animation-delay="0.7"
          title="Detect.JS"
          subtitle="Keeping the library updated with the latest browsers at the time"
          url="https://github.com/darcyclarke/Detect.js"
          tooltip="Detect.JS @ Github"
          data-theme="4"
          :items="[
            {
              name: 'Added detection of Edge, Opera, Internet Explorer 10/11 and some mobile browsers',
            },
            { name: 'Added detection of some new Operational Systems' },
          ]"
        />

        <designCard
          animation-delay="0.9"
          title="Webfont Generator CLI"
          subtitle="Easy-to-use, pre-configured tool to generate webfont icon kits from a .svg files"
          url="https://github.com/AdrianoCahete/webfont-generator-cli"
          tooltip="webfont-generator-cli @ Github"
          data-theme="3"
          :items="[
            { name: 'Fixed problems from original repository' },
            {
              name: 'Updated documentation to match the current implementation',
            },
          ]"
        />

        <designCard
          animation-delay="1.2"
          title="Portfolio"
          subtitle="Made with NuxtJS 2 (Vue), with constant updates and auto deployed on Netlify"
          url="https://github.com/AdrianoCahete/adrianocahete.dev"
          tooltip="adrianocahete.dev @ Github"
          data-theme="1"
          :items="[
            { name: 'Auto-deploy from Github' },
            { name: 'Scoped styles' },
            { name: 'Vue Components' },
            { name: 'CSS Custom Properties' },
          ]"
        />

        <designCard
          animation-delay="1.5"
          title="Simple Badges"
          subtitle="Simple Badges for Github profiles"
          url="https://github.com/AdrianoCahete/SimpleBadges"
          tooltip="Simple Badges @ Github"
          data-theme="2"
          :items="[{ name: 'Some generic SVG badges to use in Github README' }]"
        />
        <designCard
          animation-delay="1.8"
          title="Better Adrena"
          subtitle="Chrome/Firefox extension to add new functionalities to a Brazilian forum"
          url="https://github.com/AdrianoCahete/AdrenalineLight"
          tooltip="BetterAdrena @ Github"
          data-theme="4"
          :items="[
            { name: 'Applied some styles to make the UI more readable' },
            {
              name: 'Added more styles and js content to create some useful features',
            },
          ]"
        />
      </section>
    </section>
    <!-- <a href="https://github.com/GoogleChrome/lighthouse/pull/1307" /> -->
    <section id="ui" class="section-simple">
      <h1>Interfaces</h1>
      <p class="description">
        Most UIs created over the last years are under a non-disclosure
        agreement, so not everything can be publicly available.<br />
        You can see some of these projects below or on
        <a
          href="https://behance.net/AdrianoCahete/"
          title="Behance"
          target="_blank"
          rel="nofollow,noopener,external"
          >Behance</a
        >
      </p>

      <transition-group
        name="fade"
        tag="section"
        :class="$device.isMobile ? 'uiMobile' : 'grid'"
      >
        <behanceLink
          animation-delay="0.1"
          project-id="110773235"
          :key="110773235"
          project-name="phpMyAdmin-Brand-Refresh"
          display-name="phpMyAdmin Brand Refresh | 2020"
        />
        <behanceLink
          animation-delay="0.3"
          project-id="106491447"
          :key="106491447"
          project-name="Software-do-Bem-2020"
          display-name="Software do Bem | 2020"
        />
        <behanceLink
          animation-delay="0.5"
          project-id="99975665"
          :key="99975665"
          project-name="Risk-Intelligence-2017-2019"
          display-name="Risk Intelligence | 2017 - 2019"
        />
        <behanceLink
          animation-delay="0.7"
          project-id="96780423"
          :key="96780423"
          project-name="Risk-Heat-Map-2018"
          display-name="Risk Heat Map | 2018"
        />
        <behanceLink
          animation-delay="0.9"
          project-id="95161793"
          :key="95161793"
          project-name="Survey-Anonymous-Portal-2019"
          display-name="Survey Anonymous Portal | 2019"
        />
        <behanceLink
          animation-delay="1.0"
          project-id="94559463"
          :key="94559463"
          project-name="SAI360-Digital-Risk-Login-Portal-2016-2018"
          display-name="SAI360 Digital Risk Login | 2016-2018"
        />
        <behanceLink
          animation-delay="1.2"
          project-id="94434203"
          :key="94434203"
          project-name="Modulo-RiskManager-Login-Portal-2012-2016"
          display-name="Modulo RiskManager Login | 2012-2016"
        />
        <behanceLink
          animation-delay="1.5"
          project-id="60118875"
          :key="60118875"
          project-name="Integrated-Command-and-Control-Center"
          display-name="Integrated Command & Control Center | 2017 - 2019"
        />
      </transition-group>
    </section>
  </section>
</template>

<script>
import designCard from "~/components/common/Card/designCard";
import behanceLink from "~/components/common/behance/behanceLink";

export default {
  components: {
    designCard,
    behanceLink,
  },
  useHead() {
    return {
      title: "Projects",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/components/section.scss";

.description {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.section-simple ~ .section-simple {
  margin-top: 4rem;
}

.grid {
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 670px) {
  .grid {
    justify-content: center;
  }
}
</style>

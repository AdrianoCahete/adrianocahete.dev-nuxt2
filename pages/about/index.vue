<template>
  <section class="content">
    <section class="section-row">
      <section id="about-me" class="section-col">
        <p class="description">
          I'm <strong>Adriano Cahete</strong>, a <strong>Product Designer</strong> from Rio de Janeiro
        </p>
        <p class="description">
          Working across some <strong>Product Design</strong> areas (Interaction, Motion, UX, UI) as a <strong>Lead Designer</strong> and crafting awesome User Experiences on digital products <strong>with +8 years of experience</strong> with companies in Brazil, Netherlands and US.
        </p>
        <p class="description">
          With a broad range of skills, from Design to Code, specialized to fulfil the gap between Designers and Developers and creating tools to help designers to do a faster and better work.
        </p>
      </section>
      <section id="skills" class="section-col">
        <h1>Quick Facts</h1>
        <!-- {name: 'Worked with High Performance Teams'}, -->
        <listItem
          :items-col-left="[
            {name: 'Design for Desktop & Mobile'},
            {name: 'Working with remote and multi-cultural teams for the past ~5 years'},
            {name: 'Customer focused'},
            {name: 'Worked with Adobe XD & Sketch'},
            {name: 'Specialized to fulfill the gap between Designers and Developers'},
            {name: 'Knowledge in Developer Experience'},
            {name: 'Expertise with HTML/CSS (and Stylus/Saas/Less)'},
            {name: 'Clear understanding of Scrum/Kanban/Agile methodologies'},
            {name: 'Quality in mind'},
            {name: 'Git proficiency'},
            {name: 'Javascript (React, Vue/Nuxt, Node) knolowedge'},
          ]"
        />
      </section>
    </section>
    <section id="work" class="section-simple">
      <h1>Where I've Worked</h1>
      <!--  -->
      <Card
        animation-delay="0.1"
        title="Lead Product Designer & UI Developer"
        subtitle="SAI Global (US/Netherlands)"
        info="Jan 2017 - Apr 2020 | Remote"
        :items="[
          {name: 'Developed highly interactive prototypes and shipped the same UIs on delivered product'},
          {name: 'Worked closely with Product Owners and developer team to design and document features for SAI360 Digital Risk & SAI360 BWise Vendor Risk Management'},
          {name: 'Interfaced with other designers and developers in different timezones to ensure coherent UI/UX across five different products with different technologies'},
          {name: 'Developed Style Guides for multiple different products and technologies'}
        ]"
      />
      <!--   -->
      <Card
        animation-delay="0.3"
        title="UI/UX Designer & FrontEnd Developer"
        subtitle="Modulo Security Solutions (Brazil)"
        info="Oct 2012 - Dec 2016 | Partially Remote"
        :items="[
          {name: 'Write modern, maintainable and performant code for Modulo Risk Manager'},
          {name: 'Proposed and implemented a solution to make UIs more alike to the designed ones'},
          {name: 'Worked with Rio\'s Public Security Stakeholders in Integrated Command & Control Center to bring a most efficient Interface for 911 operators'},
          {name: 'Performed the layer between design and development, talking in the way that the developer understands'}
        ]"
      />
    </section>

    <section id="find-me" class="section-simple">
      <h1>Get in touch</h1>
      <p>
        You can find me in
      </p>
      <p class="primaryContact">
        me@adrianocahete.dev
      </p>
      <p>
        I'm located in Rio de Janeiro/Brazil
      </p>
      <section class="findme-icons">
        <Icon url="https://linkedin.com/in/AdrianoCahete" icon="linkedin" title="LinkedIn" />
        <Icon url="https://behance.net/AdrianoCahete" icon="behance" title="Behance" />
        <!-- <Icon url="https://codepen.io/AdrianoCahete/" icon="codepen" title="CodePen" /> -->
        <Icon url="https://github.com/AdrianoCahete" icon="github" title="Github" />
      </section>
      <Btn
        url="./resume-arctifacts/[en-US]-Adriano_Cahete.pdf"
        title="Download resume"
      />
      <!-- <Btn
        v-if="isDevMode"
        url="./resume-arctifacts/Adriano_Cahete-Resume.pdf"
        title="Test Nuxt-PDF"
      /> -->
      <!-- url="./resume/Adriano_Cahete-Resume.pdf" -- Nuxt-PDF -->
      <!-- url="./resume/[en-US]-Adriano_Cahete.pdf" -- Default -->
    </section>

    <section id="appInfo" class="section-simple appInfo">
      This portfolio is under constant update | {{ year }}.{{ month }} - v{{ $config.appVersion }}
    </section>
  </section>
</template>

<script>
import listItem from '~/components/common/listItem'
import Card from '~/components/common/Card/simpleCard'
import Btn from '~/components/common/button'
import Icon from '~/components/common/Icon'

export default {
  components: {
    listItem,
    Card,
    Btn,
    Icon
  },

  asyncData () {
    return {
      date: new Date()
    }
  },

  data () {
    return {
      isDevMode: process.env.NODE_ENV === 'development'
    }
  },

  computed: {
    year () {
      return this.date.getFullYear()
    },
    month () {
      return this.date.getMonth() + 1
    }
  },

  created () {
    if (typeof this.date === 'string') {
      this.date = new Date(this.date)
    }
  },

  head () {
    return {
      title: 'About'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl';

.primaryContact {
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  color: transparent;
  background: var(--titleColor);
  background-size: 400% 400%;
  background-clip: text;
  transition: background-position ease-in-out 2s;

  &:hover {
    animation: gradient-title 5s ease-in-out 1;
  }
}

.findme-icons {
  margin-top: 1rem;

  a {
    color: var(--subtitleColor);
    fill: currentColor;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
}

.appInfo {
  font-size: 1rem;
  padding-bottom: 1vh;
  padding-top: 1vh;
}
</style>

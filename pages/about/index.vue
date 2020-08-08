<template>
  <section class="content">
    <section class="section-row">
      <section id="about-me" class="section-col">
        <p class="title">
          I'm <strong>Adriano Cahete</strong>, a <strong>Product Designer</strong> from Rio de Janeiro
        </p>
        <p class="description">
          Working across some <strong>Product Design</strong> areas (Interaction, Motion, UX, UI), as a <strong>Lead Designer</strong>, and crafting awesome User Experiences on digital products <strong>with +8 years of experience</strong> with companies in Brazil and US.
        </p>
        <p class="description">
          With a broad of skills, from Design to Code, specialized to fulfil the gap between Designers and Developers and creating tools to help designers to do a faster and better work.
        </p>
      </section>
      <section id="skills" class="section-col">
        <!-- {name: 'Worked with High Performance Teams'}, -->
        <listItem
          title="Some Skills"
          :items-col-left="[
            {name: 'Design for Desktop & Mobile'},
            {name: 'Working with remote teams for the past ~5 years'},
            {name: 'Customer focused'},
            {name: 'Specialized to fullfil the gap between Designers and Developers'},
            {name: 'HTML/CSS (and Stylus/Saas/Less)'},
            {name: 'Adobe XD & Sketch'},
            {name: 'Scrum / Kanban / Agile'},
            {name: 'Quality in mind'},
            {name: 'Git'},
            {name: 'Javascript (React, Vue/Nuxt, Node)'},
          ]"
        />
      </section>
    </section>
    <section id="work" class="section-simple">
      <h1>Where I've Worked</h1>
      <Card
        animation-delay="0.1"
        title="Lead Product Designer & UI Developer"
        subtitle="SAI Global (US/Netherlands)"
        info="Jan 2017 - Apr 2020 | Remote"
        :items="[
          {name: 'Developed highly interactive prototypes and shipped the same UIs on delivered product'},
          {name: 'Worked closely with Product Owners and developer team to design and document features for SAI360 Digital Risk & SAI360 BWise Vendor Risk Management'},
          {name: 'Interfaced with other designers and developers in different timezones to ensure coherent UI/UX across five different products with different technologies'},
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
          {name: 'Worked with Public Security\'s Stakeholders in Command & Control Integrated System to bring a most efficient Interface for 911 operators'},
        ]"
      />
    </section>

    <section id="find-me" class="section-simple">
      <h1>Work Inquiries</h1>
      <p>
        You can find me in
      </p>
      <p class="primaryContact">
        me@adrianocahete.dev
      </p>
      <section class="findme-icons">
        <Icon url="https://linkedin.com/in/AdrianoCahete/" icon="linkedin" title="LinkedIn" />
        <Icon url="https://behance.net/AdrianoCahete/" icon="behance" title="Behance" />
        <Icon url="https://github.com/AdrianoCahete" icon="github" title="Github" />
      </section>
      <Btn
        url="./resume/[en-US]-Adriano_Cahete.pdf"
        title="Download resume"
      />
      <!-- <a href="./resume/[en-US]-Adriano_Cahete__2020.06.pdf" target="_blank" rel="nofollow,noopener,external">Download resume</a> -->
    </section>
  </section>
</template>

<script>
import listItem from '~/components/common/listItem'
import Card from '~/components/common/card'
import Btn from '~/components/common/button'
import Icon from '~/components/common/Icon'

export default {
  components: {
    listItem,
    Card,
    Btn,
    Icon
  },

  head () {
    return {
      title: 'Skills'
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
}

.findme-icons {
  margin-top: 1rem;

  a {
    color: var(--textColor);
    fill: currentColor;
  }
}
</style>

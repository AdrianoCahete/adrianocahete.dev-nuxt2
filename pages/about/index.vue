<template>
  <section class="page">
    <navbar-menu show-avatar />
    <section class="content">
      <section class="section-row">
        <section id="about-me" class="section-col">
          <h1>I'm Adriano Cahete, a Product Designer from Rio de Janeiro</h1>
          <p class="description">
            Working across some <strong>Product Design</strong> areas (Interaction, Motion, UX, UI), being a <strong>Lead Designer</strong> and crafting awesome User Experiences on digital products <strong>with +8 years of experience</strong> with companies in Brazil and US.
          </p>
          <p class="description">
            With a broad of skills, from Design to Code, specialized to fullfil the gap between Designers and Developers and creating tools to help designers to do a faster and better work.
          </p>
        </section>
        <section id="skills" class="section-col">
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
        <!-- Developed highly interactive prototypes and shipped the same UIs on delivered product -->
        <!-- Worked closely with Product Owners and developer team to design and document features for SAI360 Digital Risk & SAI360 BWise Vendor Risk Management -->
        <!-- Interfaced with other designers and developers to ensure coherent UI/UX across five different products with different technologies -->
        <Card
          animation-delay="0.1"
          title="Lead Product Designer & UI Developer"
          subtitle="SAI Global (US/Netherlands)"
          info="Jan 2017 - Apr 2020 | Remote"
          :items="[
            {name: 'SAI360 Digital Risk', url: 'https://www.saiglobal.com/risk/solutions/it-risk-cybersecurity'},
            {name: 'SAI360 Risk Intelligence'},
            {name: 'SAI360 BWise Vendor Risk Management'},
          ]"
        />

        <!-- Write modern, maintainable and performant code for Modulo Risk Manager  -->

        <!-- Proposed and implemented a solution to make Ui's more alike to the designed ones -->
        <Card
          animation-delay="0.3"
          title="UI/UX Designer & FrontEnd Developer"
          subtitle="Modulo Security Solutions (Brazil)"
          info="Oct 2012 - Dec 2016 | Partially Remote"
          :items="[
            {name: 'Modulo Risk Manager'},
            {name: 'Modulo Smart Cities'},
            {name: 'Command and Control Integrated System'},
          ]"
        />
      </section>

      <section id="find-me" class="section-simple">
        <h1>Work Inquiries</h1>
        <p>
          You can find me in
        </p>
        <p>
          me@adrianocahete.dev
        </p>
        <p>
          LinkedIn, Github and Behance.
        </p>
        <Btn
          url="./resume/[en-US]-Adriano_Cahete.pdf"
          title="Download resume"
        />
        <!-- <a href="./resume/[en-US]-Adriano_Cahete__2020.06.pdf" target="_blank" rel="nofollow,noopener,external">Download resume</a> -->
      </section>
    </section>
  </section>
</template>

<script>
import navbarMenu from '~/components/common/navbar'
import listItem from '~/components/common/listItem'
import Card from '~/components/common/card.vue'
import Btn from '~/components/common/button.vue'

export default {
  components: {
    navbarMenu,
    listItem,
    Card,
    Btn
  },

  head () {
    return {
      title: 'Skills'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'
</style>

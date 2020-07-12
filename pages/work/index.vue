<template>
  <section class="page">
    <navbar-menu show-avatar />
    <section class="content">
      <section id="work" class="section">
        <p class="description">
          I have over 8 years of experience in Product Design and UI Development and I know the basics of a few Front End and Backend languages/frameworks
        </p>

        <Card
          animation-delay="0.1"
          title="Lead Product Designer & UI Developer"
          subtitle="SAI Global (US/Netherlands)"
          info="Jan 2017 - Apr 2020 | Remote"
        >
          <li>
            SAI360 Digital Risk
            <Icon url="https://www.saiglobal.com/risk/solutions/it-risk-cybersecurity" icon="link" title="SAI360 Digital Risk" class="cardLink-Item" />
          </li>
          <li>
            SAI360 Risk Intelligence
          </li>
          <li>
            SAI360 BWise Vendor Risk Management
          </li>
        </Card>

        <Card
          animation-delay="0.3"
          title="UI/UX Designer & FrontEnd Developer"
          subtitle="Modulo Security Solutions (Brazil)"
          info="Oct 2012 - Dec 2016 | Partially Remote"
        >
          <li>
            Modulo Risk Manager
          </li>
          <li>
            Modulo Smart Cities
          </li>
          <li>
            Command and Control Integrated System
          </li>
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
      title: 'Work'
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

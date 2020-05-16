<template>
  <div :class="$device.isMobile || $device.isTablet ? 'page isMobile' : 'page'">
    <navbar-menu />
    <section class="content">
      <section id="work" class="section">
        <p class="description">
          I have over 8 years of experience in UI/UX design and UI Development and I know the basics of a few Front End and Backend languages
        </p>

        <!-- TODO: Move Cards to component (Work and Projects) -->
        <div class="card">
          <h2 class="cardTitle">
            Lead User Interface/User Experience Designer & UI Developer
          </h2>
          <h3 class="cardSubTitle">
            SAI Global (US/Netherlands)
          </h3>
          <h4 class="cardInfo">
            Jan 2017 - Present | Remote
          </h4>
          <ul class="cardItems">
            <li>
              SAI360 Digital Risk
              <svgLinks url="https://www.saiglobal.com/risk/solutions/it-risk-cybersecurity" icon="link" title="SAI360 Digital Risk" class="cardLink-Item" />
              <!-- <svgLinks url="https://www.saiglobal.com/risk/solutions/it-risk-cybersecurity" icon="behance" title="SAI360 Digital Risk @ Behance" class="cardLink-Item" /> -->
            </li>
            <li>
              SAI360 Risk Intelligence
            </li>
            <li>
              SAI360 BWise Vendor Risk Management
            </li>
          </ul>
        </div>

        <div class="card">
          <h2 class="cardTitle">
            FrontEnd UI/UX & FrontEnd Developer
          </h2>
          <h3 class="cardSubTitle">
            Modulo Security Solutions (Brazil)
          </h3>
          <h4 class="cardInfo">
            Oct 2012 - Dec 2016 | Partially Remote
          </h4>
          <ul class="cardItems">
            <li>
              Modulo Risk Manager
            </li>
            <li>
              Command and Control Integrated System
            </li>
          </ul>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import navbarMenu from '~/components/common/navbar'
import svgLinks from '~/components/common/svgLinks.vue'

export default {
  // layout: 'blog'
  components: {
    navbarMenu,
    svgLinks
  },

  head () {
    return {
      title: 'Work'
      // meta: [
      // ]
      // bodyAttrs: {
      //   class: 'work'
      // }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/card.styl'
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

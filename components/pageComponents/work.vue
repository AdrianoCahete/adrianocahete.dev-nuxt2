<template>
  <section id="work" class="section">
    <h1 class="title">
      Work Experience
    </h1>
    <p class="description">
      I have over 9 years of experience in UI/UX design, UI Development and know the basics of a few Front End and Backend languages
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
        2017 - Today | Partially Remote
      </h4>
      <ul class="cardItems">
        <li>SAI Digital Risk 360</li>
        <li>SAI RIsk Intelligence</li>
        <li>SAI BWise Vendor Risk Management 360</li>
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
        2012-2016 | Partially Remote
      </h4>
      <ul class="cardItems">
        <li>Modulo Risk Manager</li>
        <li>Command and Control Integrated System</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  // layout: 'blog'
  components: {
  },

  head () {
    return {
      // title: 'Work',
      meta: [
      ]
      // bodyAttrs: {
      //   class: 'work'
      // }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/styles/components/card.styl'
</style>

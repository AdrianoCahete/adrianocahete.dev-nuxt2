<template>
  <section id="work" class="section">
    <h1 class="title">
      Work Experience
    </h1>
    <p class="description">
      I have over 9 years of experience in UI/UX design, UI Development and know the basics of a few Front End and Backend languages
    </p>

    <!-- TODO: Move Work cards to component -->
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
.title {
  display: block;
  font-weight: 300;
  letter-spacing: 1px;
}

.description {
  margin-top: 1rem;
  margin-bottom: @margin-top;
}

.card {
  margin-top: 2rem;
  padding-left: 2rem;
  padding-top: .5rem;
  padding-bottom: .8rem;
  border-left: 1px solid #ccc;

  .cardTitle,
  .cardSubTitle,
  .cardInfo {
    font-weight: normal;
  }

  .cardInfo {
    margin-bottom: 1rem;
  }

  .cardItems {
    list-style-type: circle;
    padding-left: 2rem;
  }
}
</style>

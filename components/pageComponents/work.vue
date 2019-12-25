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
        Company 1
      </h2>
      <h3 class="cardSubTitle">
        Work Position
      </h3>
      <ul class="cardItems">
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>

    <div class="card">
      <h2 class="cardTitle">
        Company 2
      </h2>
      <h3 class="cardSubTitle">
        Work Position
      </h3>
      <ul class="cardItems">
        <li>a</li>
        <li>b</li>
        <li>c</li>
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
      title: 'Work',
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
</style>

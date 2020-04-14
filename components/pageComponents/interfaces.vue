<template>
  <section id="interfaces" class="section">
    <h1 class="title">
      Interfaces
    </h1>
    <p class="description">
      Most UIs created by me over the last years are under a non-disclosure agreement, so I'm working with stakeholders to obtain their permission to make them publicly available.<br>
      You can see some of these projects below or here: <a href="https://behance.net/AdrianoCahete/" title="Behance" rel="nofollow,noopener,external">Behance<svgLinks url="https://behance.net/AdrianoCahete/" icon="behance" title="Behance" class="cardLink-Item" /></a>
    </p>
    <div class="uiGrid">
      <!-- <behanceFrame project-id="94434203" project-name="Modulo-RiskManager-Login-(Sign-in)-Portal-2012-2016" /> -->
      <behanceLink
        project-id="94434203"
        project-name="Modulo-RiskManager-Login-(Sign-in)-Portal-2012-2016"
        display-name="Modulo RiskManager Login - 2012-2016"
      />
    </div>
  </section>
</template>

<script>
// import behanceFrame from '~/components/common/behance/behanceFrame.vue'
import behanceLink from '~/components/common/behance/behanceLink.vue'

export default {
  components: {
    // behanceFrame,
    behanceLink
  }
}
</script>

<style lang="stylus" scoped>
.title {
  display: block;
  font-weight: 300;
  letter-spacing: 1px;
}

.uiGrid {
  height: 70vh;
  margin-top: 1vh;
}
</style>

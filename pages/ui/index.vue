<template>
  <div :class="$device.isMobile || $device.isTablet ? 'page isMobile' : 'page'">
    <navbar-menu />
    <section class="content">
      <section id="interfaces" class="section">
        <h1 class="title">
          Interfaces
        </h1>
        <p class="description">
          Most UIs created by me over the last years are under a non-disclosure agreement, so I'm working with stakeholders to obtain their permission to make them publicly available.<br>
          You can see some of these projects below or on <a href="https://behance.net/AdrianoCahete/" title="Behance" rel="nofollow,noopener,external">Behance<svgLinks url="https://behance.net/AdrianoCahete/" icon="behance" title="Behance" class="cardLink-Item" /></a>
        </p>
        <div v-if="$device.isMobile">
          <alert
            message="Pay attention that Behance projects may be difficult to view on small screens"
            type="info"
          />
        </div>
        <div :class="$device.isMobile ? 'uiMobile' : 'uiGrid'">
          <behanceLink
            project-id="95161793"
            project-name="Survey-Anonymous-Portal-2019"
            display-name="Survey Anonymous Portal - 2019"
          />
          <behanceLink
            project-id="94559463"
            project-name="SAI360-Digital-Risk-Login-(Sign-in)-Portal-2016-2018"
            display-name="SAI360 Digital Risk Login - 2016-2018"
          />
          <behanceLink
            project-id="94434203"
            project-name="Modulo-RiskManager-Login-(Sign-in)-Portal-2012-2016"
            display-name="Modulo RiskManager Login - 2012-2016"
          />
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import navbarMenu from '~/components/common/navbar'
import behanceLink from '~/components/common/behance/behanceLink.vue'
import svgLinks from '~/components/common/svgLinks.vue'
import alert from '~/components/common/alert.vue'

export default {
  components: {
    navbarMenu,
    behanceLink,
    svgLinks,
    alert
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'

// TODO: Move to base style
.title {
  display: block;
  font-weight: 300;
  letter-spacing: 1px;
}

// TODO: Move to base style
.uiGrid {
  display: flex;
  flex-wrap:wrap
  margin-top: 1vh;

  > div {
    flex: 0 1 auto;
    margin-right: 1vw;
  }
}

.uiMobile {
  margin: 1vh 0;
}
</style>

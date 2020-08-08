<template>
  <section class="content">
    <section id="interfaces" class="section">
      <p class="description">
        Most UIs created by me over the last years are under a non-disclosure agreement, so I'm working with stakeholders to obtain their permission to make them publicly available.<br>
        You can see some of these projects below or on <a href="https://behance.net/AdrianoCahete/" title="Behance" target="_blank" rel="nofollow,noopener,external">Behance<Icon url="https://behance.net/AdrianoCahete/" icon="behance" title="Behance" class="cardLink-Item" /></a>
      </p>
      <section v-if="$device.isMobile">
        <alert
          message="Pay attention that Behance projects may be difficult to view on small screens"
          type="info"
        />
      </section>
      <section v-if="$nuxt.isOffline">
        <alert
          message="You appear to be offline. This links won't load, but you can still navigate on this portfolio."
          type="info"
        />
      </section>
      <section :class="$device.isMobile ? 'uiMobile' : 'uiGrid'">
        <behanceLink
          animation-delay="0.1"
          project-id="99975665"
          project-name="Risk-Intelligence-20172019"
          display-name="Risk Intelligence | 2017 - 2019"
        />
        <behanceLink
          animation-delay="0.3"
          project-id="96780423"
          project-name="Risk-Heat-Map-2018"
          display-name="Risk Heat Map | 2018"
        />
        <behanceLink
          animation-delay="0.5"
          project-id="95161793"
          project-name="Survey-Anonymous-Portal-2019"
          display-name="Survey Anonymous Portal | 2019"
        />
        <behanceLink
          animation-delay="0.7"
          project-id="94559463"
          project-name="SAI360-Digital-Risk-Login-(Sign-in)-Portal-2016-2018"
          display-name="SAI360 Digital Risk Login | 2016-2018"
        />
        <behanceLink
          animation-delay="0.9"
          project-id="94434203"
          project-name="Modulo-RiskManager-Login-(Sign-in)-Portal-2012-2016"
          display-name="Modulo RiskManager Login | 2012-2016"
        />
      </section>
    </section>
  </section>
</template>

<script>
import behanceLink from '~/components/common/behance/behanceLink'
import Icon from '~/components/common/Icon'
import alert from '~/components/common/alert'

export default {
  components: {
    behanceLink,
    Icon,
    alert
  },
  head () {
    return {
      title: 'Interfaces',
      bodyAttrs: {
        class: 'page-ui'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'

// TODO: Move to base style
.uiGrid {
  display: flex;
  flex-wrap:wrap
  margin-top: 1vh;

  > div {
    flex: 0 1 auto;
    margin-right: 1vw;
    margin-bottom: 1vw;
  }
}

.uiMobile {
  margin: 1vh 0;
}

// Phone
@media (max-width: 390px) {
  .uiGrid {
    justify-content: center;
  }
}
</style>

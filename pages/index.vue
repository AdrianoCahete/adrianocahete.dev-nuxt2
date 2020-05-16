<template>
  <section :class="$device.isMobile || $device.isTablet ? 'page isMobile' : 'page'">
    <navbar-menu />
    <section class="content">
      <section id="home" class="section isCentered">
        <!-- <logo /> -->
        <!-- TODO: Move to component with variables -->
        <h1 class="titleMain">
          Adriano Cahete
        </h1>
        <p class="descriptionMain">
          I am a <strong>User Interface Developer</strong>, <strong>User Interface</strong> & <strong>User Experience Designer</strong>
        </p>
        <!-- <p class="descriptionMain">
          currently working at <a href="#">SAI Global</a>
        </p> -->
      </section>
    </section>
  </section>
</template>

<script>
import navbarMenu from '~/components/common/navbar'

export default {
  components: {
    navbarMenu
  }

  // data () {
  //   return {
  //     dataLoaded: false
  //   }
  // },

  // head () {
  //   return {
  //     bodyAttrs: {
  //       class: this.dataLoaded ? 'loading' : ''
  //     }
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'

.titleMain {
  display: block;
  font-weight: 300;
  font-size: 10rem;
  letter-spacing: 1px;
}

.descriptionMain {
  color: var(--grayedOut, #FFFFFF);
}

@media (max-width: 800px) {
  .titleMain {
    font-size: 5rem;
  }
}
</style>

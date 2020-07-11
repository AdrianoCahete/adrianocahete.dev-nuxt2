<template>
  <section class="page">
    <navbar-menu />
    <section class="content home">
      <section id="home" class="section isCentered">
        <!-- TODO: Move to component with variables -->
        <h1 class="titleMain">
          Adriano Cahete
        </h1>
        <p class="descriptionMain">
          I am a <strong>Product Designer</strong> & <strong>User Interface Developer</strong>
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
  },

  head () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'

.home {
  animation: fadeIn .5s ease-in;
}

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
    font-size: 4.5rem;
  }
}
</style>

<template>
  <section id="home" class="section isCentered">
    <!-- <logo /> -->
    <h1 class="titleMain">
      Adriano Cahete
    </h1>
    <p class="descriptionMain">
      I am a <strong>User Interface Developer</strong>, <strong>User Interface</strong> & <strong>User Experience Designer</strong>
    </p>
    <p class="descriptionMain">
      currently working at <a href="#">SAI Global</a>
      <!-- TODO: Move to component with variables -->
    </p>
    <!-- You can ignore this code, it's just a "quick" workaround to say to you that it's a WIP project... -->
    <!-- It's a auto deploy from a master branch in Github, so this is why I need this warning... -->
    <!-- <h2><i>As you can see, this is a working in progress portfolio...</i></h2> -->
  </section>
</template>

<script>
export default {
  // layout: 'blog'
  components: {
  },

  head () {
    return {
      // title: 'Home',
      // bodyAttrs: {
      //   class: 'home'
      // }
    }
  }
}
</script>

<style lang="stylus" scoped>
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
    font-size: 8rem;
  }
}
</style>

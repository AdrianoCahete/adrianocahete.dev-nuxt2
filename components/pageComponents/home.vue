<template>
    <section id="home" class="section isCentered">
      <!-- <logo /> -->
      <h1 class="title">
        Adriano Cahete
      </h1>
      <p>
        I am a <strong>User Interface Developer</strong>, <strong>User Interface</strong> & <strong>User Experience Designer</strong>
      </p>
      <p>
        currently working at <a href="#">SAI Global</a>
        <!-- TODO: Move to component with variables -->
      </p>
      <!-- You can ignore this code, it's just a "quick" workaround to say to you that it's a WI project... -->
      <!-- It's a auto deploy from a master branch in Github, so this is why I need this warning... -->
      <h2><i>As you can see, this is a working in progress portfolio...</i></h2>
    </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  // layout: 'blog'
  components: {
    Logo
  },

  head () {
    return {
      title: 'Home',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        //{ hid: 'description', name: 'description', content: 'Adriano\'s Cahete Portfolio' }
      ],
      bodyAttrs: {
        class: 'home'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}
</style>

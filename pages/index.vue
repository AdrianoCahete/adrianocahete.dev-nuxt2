<template>
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
</template>

<script>
export default {
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
  font-weight: 400;
  font-size: 10rem;
  letter-spacing: 1px;
  color: transparent;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); // var(--bgColor);
  background-size: 400% 400%;
  background-clip: text;
  animation: gradient-title 5s ease-in-out infinite;
  // animation-direction: alternate;
}

.descriptionMain {
  color: var(--textColor, #FFFFFF);
  opacity: 0.6;
  transition: opacity .5s ease-in-out;

  &:hover {
    opacity: 1;
    transition: opacity .5s ease-in-out;
  }
}

.isMobile {
  .home {
    overflow: hidden;

    .section {
      min-height: 94vh;
    }
  }
}

@media (max-width: 800px) {
  .titleMain {
    font-size: 4.5rem;
  }
}
</style>

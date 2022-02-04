<template>
  <section class="avatar">
    <!-- TODO: Make a default image to load/cache for offline mode -->
    <img
      :src="'https://github.com/' + userName + '.png'"
      :alt="$nuxt.isOffline ? '' : userName"
      :title="$nuxt.isOffline ? 'You appear to be offline' : ''"
    />
  </section>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
      default: "github"
    }
  },
  head() {
    return {
      // script: [
      //   { img: 'https://github.com/AdrianoCahete.png' } // TODO: Make a default image to load/cache for offline mode
      // ]
    };
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  > img {
    width: 8rem;
    max-width: 8rem;
    height: 8rem;
    min-height: 8rem;
    background-color: var(--textColor, #ffffff);
    border-radius: 50%;
    border: 2px solid var(--defaultBorderColor, #ffffff);
    animation: fadeIn 1s ease-in;
    overflow: hidden;
  }
}

@media (max-width: 1024px) {
  .avatar {
    display: none;
  }
}

.isOffline {
  .avatar > img {
    border-color: var(--alertError);
    transition: border-color 0.5s ease-in-out;
  }
}
</style>

<template>
  <div class="avatar">
    <img :src="'https://github.com/'+ userName + '.png'" :alt="$nuxt.isOffline ? '' : userName" :title="$nuxt.isOffline ? 'You appear to be offline' : ''">
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
      default: 'github'
    }
  }
}
</script>

<style lang="stylus" scoped>
.avatar {
  > img {
    width: 8rem;
    min-width: @width;
    height: @width;
    min-height: @height;
    background-color: var(--textColor, #ffffff);
    border-radius: 50%;
    border: 2px solid var(--primaryColor, #FFFFFF);
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
    transition: border-color .5s ease-in-out;
  }
}
</style>

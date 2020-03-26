<template>
  <div class="avatar">
    <img :src="'https://github.com/'+ userName + '.png'" :alt="userName">
  </div>
</template>

<script>
export default {
  props: {
    'userName': {
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
      height: @width;
      min-height: 80px;
      background-color: var(--textColor, #ffffff);
      border-radius: 50%;
      border: 2px solid var(--primaryColor, #FFFFFF);
      // TODO: Create animation on render
    }
  }
</style>

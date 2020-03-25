<template>
  <div class="avatar">
    <img :src="'https://github.com/'+ userName + '.png'">
  </div>
</template>

<script>
export default {
  props: {
    'userName': {
      type: String,
      required: true,
      default: 'Github'
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
      border: 2px solid #ccc; // Move to vars
      // TODO: Create animation on render
    }
  }
</style>

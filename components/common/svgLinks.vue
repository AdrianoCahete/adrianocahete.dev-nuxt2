<template>
  <!-- <div class="avatar">
    <img :src="'https://github.com/'+ userName + '.png'">
  </div> -->
  <a :href="targetURL" target="_blank" rel="nofollow,noopener,external">
    <svg class="">
      <use :xlink:href="'#'+ icon"></use>
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    'targetURL': {
      type: String,
      required: true,
      default: '#'
    },
    'icon': {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

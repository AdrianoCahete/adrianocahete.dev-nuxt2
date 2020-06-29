<template>
  <div class="beFrame">
    <iframe
      :src="'https://www.behance.net/gallery/'+ projectId +'/'+ projectName +'?iframe=1'"
    />
  </div>
</template>

<script>
export default {
  props: {
    projectId: {
      type: String,
      required: true,
      default: ''
    },
    projectName: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.beFrame {
  left: 0;
  width: 100%;
  height: 0;
  position: relative;
}

iframe {
  border: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>

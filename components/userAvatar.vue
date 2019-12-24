<template>
  <div class="avatar">
    <img :src="'https://github.com/'+ userName + '.png'">
    <!-- <img src="https://github.com/AdrianoCahete.png"> -->
  </div>
</template>

<script>
export default {
  //  components: {
  //      userAvatar: {
  //          props: ['user'] // ??
  //      }
  //  }
  //  data () {
  //      return { userName: "AdrianoCahete" }
  //  }

  props: {
    'userName': String
  }
}
</script>

<style lang="stylus" scoped>
.avatar {

    > img {
      width: 30%;
      min-height: 80px;
      height: @width;
      background-color: #fff;
      border-radius: 50%;
      border: 2px solid #ccc; // Move to vars
      // TODO: Create animation on render
    }
  }
</style>

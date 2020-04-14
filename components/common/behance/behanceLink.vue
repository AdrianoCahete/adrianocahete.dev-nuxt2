<template>
  <div class="beLink">
    <a
      :href="'https://www.behance.net/gallery/'+ projectId +'/'+ projectName"
      target="_blank"
      rel="nofollow,noopener,external"
    >
      <img
        :src="'./behance/projects/' + projectId + '.png'"
      >
      <span class="projectName">
        {{ displayName }}
      </span>
    </a>
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
    },
    displayName: {
      type: String,
      required: true,
      default: ''
    }
    // hideMobile: {
    //   type: Boolean,
    //   default: false
    // }
  }
}
</script>

<style lang="stylus" scoped>
.beLink {
  display: flex;
  width: 30%;
  height: auto;

  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 213px; // TODO: Get from image
    text-decoration none;
    color: #FFFFFF;

    > img {
      height: inherit;
      width: inherit;
    }

    .projectName {
      opacity: 0;
      transition: ease opacity .5s;
    }

    &:hover {
      .projectName {
        opacity: 1;
        transition: ease opacity .5s;
      }
    }
  }

  .projectName {
    // display: block;
    position: relative;
    bottom: 46px;
    padding-left: 2%;
    padding-bottom: 2px;
    background: linear-gradient(180deg, rgba(57,57,57,0) 0%, rgba(0,0,0,.7) 100%);
    text-shadow: 1px 1px 2px black, 0 0 1rem black, 0 0 0.2rem black;
    text-decoration: none;
  }
}
</style>

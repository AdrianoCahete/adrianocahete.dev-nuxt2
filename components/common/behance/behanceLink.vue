<template>
  <div :class="$device.isMobile ? 'beLinkMobile' : 'beLink'">
    <a
      v-if="!$device.isMobile"
      :href="'https://www.behance.net/gallery/'+ projectId +'/'+ projectName"
      target="_blank"
      rel="nofollow,noopener,external"
      :title="displayName"
    >
      <img
        :src="'./behance/projects/' + projectId + '.png'"
        :alt="displayName"
      >
      <span class="projectName">
        {{ displayName }}
      </span>
    </a>

    <!-- if isMobile -->
    <a
      v-if="$device.isMobile"
      :href="'https://www.behance.net/gallery/'+ projectId +'/'+ projectName"
      target="_blank"
      rel="nofollow,noopener,external"
    >
      <Icon :url="'https://www.behance.net/gallery/'+ projectId +'/'+ projectName" icon="behance" :title="displayName" class="cardLink-Item" />
      {{ displayName }}
    </a>
  </div>
</template>

<script>
import Icon from '~/components/common/Icon.vue'

export default {
  components: {
    Icon
  },

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
    },
    projectDate: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.beLink {
  display: flex;
  width: 280px;
  height: auto;
  border: 2px solid var(--scrollbarColor);

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

    // &:hover { // TODO: Fix on Chrome
    //   .projectName {
    //     opacity: 1;
    //     transition: ease opacity .5s;
    //   }
    // }
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

.beLinkMobile {
  a {
    display: inline-block;
    padding: 1vh 0;
  }

  &:hover {
    a {
      text-decoration-color: red;
    }
  }
}
</style>

<template>
  <section class="WhoAmI">
    <h1 v-if="authorName" :class="isMain ? 'titleMain':''">
      {{ authorName }}
    </h1>
    <p v-if="jobTitle" :class="isMain ? 'descriptionMain':''">
      I am a <strong>{{ jobTitle }}</strong><span v-if="currentCompany"> @ {{ currentCompany }}</span>
    </p>
  </section>
</template>

<script>
export default {
  props: {
    authorName: {
      type: String,
      required: true,
      default: ''
    },
    jobTitle: {
      type: String,
      required: false,
      default: ''
    },
    currentCompany: {
      type: String,
      required: false,
      default: ''
    },
    isMain: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
h1 {
  white-space: nowrap;
}

p:not(.descriptionMain) {
  font-size: 1.3rem;
}

h1:not(.titleMain) {
  font-weight: 500;
}

.titleMain {
  display: block;
  font-weight: 500;
  font-size: 10rem;
  color: transparent;
  background: var(--titleColor);
  background-size: 400% 400%;
  background-clip: text;
  animation: gradient-title 5s ease-in-out infinite;
  // animation-direction: alternate;
  transition: font-size .5s ease-in-out;
  cursor: default;
}

.descriptionMain {
  color: var(--textColor, #FFFFFF);
  opacity: 0.6;
  transition: opacity .5s ease-in-out;
  cursor: default;

  &:hover {
    opacity: 1;
    transition: opacity .5s ease-in-out;
  }
}

@media (max-width: 800px) {
  .titleMain {
    font-size: 4.5rem;
  }
}
</style>

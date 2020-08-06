<template>
  <section class="WhoAmI">
    <h1 v-if="authorName">
      {{ authorName }}
    </h1>
    <p v-if="jobTitle">
      {{ jobTitle }}
    </p>
    <p v-if="currentCompany">
      currently working at {{ currentCompany }}
    </p>
  </section>
</template>

<script>
export default {
  props: {
    authorName: {
      type: String,
      required: true
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
    }
  }
}
</script>

<style lang="stylus" scoped>
h1 {
  white-space: nowrap;
}

p {
  font-size: 1.3rem;
}
</style>

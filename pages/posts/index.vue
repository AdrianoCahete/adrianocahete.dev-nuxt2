<template>
  <section class="content">
    <div class="box-header">
      <div class="box-item">
        <span class="box-value">{{ posts.length }}</span>
        <span class="box-title">posts</span>
      </div>
    </div>

    <div class="post-list">
      <div
        v-for="post of posts"
        :key="post.slug"
        :class="['post-item', post.isDeprecated ? ' isDeprecated ' : '']"
      >
        <NuxtLink :to="{ path: 'posts/' + post.slug }">
          <!--
          <div>
            <img :src="post.img" :alt="post.title" />
          </div>
          -->
          <div class="post-primaryInfo">
            <span class="post-title">{{ post.title }}</span>
          </div>
          <div class="post-secondaryInfo">
            <div class="tag-list">
              <div :class="['tag tag-' + post.type]">
                {{ post.type }}
              </div>
            </div>
            <span>{{ post.description }}</span>
          </div>
          <div class="post-toolbar">
            <div>
              <span v-if="post.version > 0">v{{ post.version }}</span>
            </div>
            <div>
              <span v-if="post.author">{{ post.author }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
// const sort = (a, b, asc) => asc ? a - b : b - a

// const ORDERS = {
//   DESC: 'desc',
//   ASC: 'asc'
// }

export default {
  async asyncData({ $content, params }) {
    const posts = await $content("posts", params.slug)
      // .only(['title', 'description', 'id', 'img', 'slug', 'releaseStatus', 'version', 'type', 'updatedAt'])
      .sortBy("title", "asc")
      .fetch();

    return {
      posts
    };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>

<style lang="scss" scoped></style>

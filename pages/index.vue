<template>
  <div>
    <div class="cover">
      <div class="cover-content">
        <div class="cover-description">
          Hi there 👋 My name is <strong>Nicky van Urk</strong>, programmer
          &amp; tech enthusiast. I'm currently studying for my bachelor's degree
          in Computer Science.
        </div>
      </div>
    </div>

    <h1>Blog Posts</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { articles }
  },
  head() {
    return { title: 'Home' }
  },
}
</script>

<style>
.cover {
  margin-top: 4.5rem;
}

.cover-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
}

.cover-description {
  font-size: 1.7rem;
}
</style>

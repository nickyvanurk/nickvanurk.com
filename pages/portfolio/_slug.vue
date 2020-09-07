<template>
  <article>
    <AppSearchInput />

    <nav>
      <ul>
        <li v-for="link of project.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <h1>{{ project.title }}</h1>
    <p>Project last updated: {{ formatDate(project.updatedAt) }}</p>

    <nuxt-content :document="project" />

    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    const [prev, next] = await $content('projects')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      project,
      prev,
      next,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }

      return new Date(date).toLocaleDateString('en', options)
    },
  },
  head() {
    return { title: this.project.title }
  },
}
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}

.nuxt-content p {
  margin-bottom: 20px;
}

.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>

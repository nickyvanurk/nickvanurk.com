<template>
  <div>
    <div class="cover">
      <div class="cover-content">
        <div class="cover-description">
          Hi there 👋 My name is <strong>Nicky van Urk</strong>, programmer
          &amp; tech enthusiast. I'm currently studying for my bachelor's degree
          in Computer Science.
        </div>

        <div class="cover-portfolio">
          <NuxtLink
            v-for="project of projects"
            :key="project.slug"
            :to="{ name: 'portfolio-slug', params: { slug: project.slug } }"
            class="button"
          >
            {{ project.title }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="site-content">
      <div class="content-area">
        <main class="site-main">
          <div class="post-feed">
            <article
              v-for="article of articles"
              :key="article.slug"
              class="feed post"
            >
              <div class="feed-calendar">
                <div class="feed-calendar-month">
                  {{ formatMonth(article.updatedAt) }}
                </div>
                <div class="feed-calendar-day">
                  {{ formatDay(article.updatedAt) }}
                </div>
              </div>

              <h2 class="feed-title">{{ article.title }}</h2>

              <div class="feed-right">
                <div class="feed-length">{{ article.length }} min read</div>
              </div>

              <svg class="icon feed-icon">
                <use xlink:href="/all.svg#gg-chevron-right" />
              </svg>

              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                class="u-permalink"
              >
              </NuxtLink>
            </article>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content('projects', params.slug)
      .limit(3)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    const articles = await $content('articles', params.slug)
      .limit(5)
      .only(['title', 'description', 'img', 'slug', 'length', 'updatedAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return { projects, articles }
  },
  methods: {
    formatMonth(date) {
      const options = { month: 'short' }

      return new Date(date).toLocaleDateString('en', options)
    },
    formatDay(date) {
      const options = { day: 'numeric' }

      return new Date(date).toLocaleDateString('en', options)
    },
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

.cover-portfolio {
  display: flex;
  margin-top: 2rem;
}

.cover-portfolio .button {
  margin: 0 0.5rem;
}

@media (max-width: 767px) {
  .cover-portfolio {
    flex-direction: column;
  }

  .cover-portfolio .button {
    margin: 0;
  }

  .cover-portfolio .button + .button {
    margin-top: 1rem;
  }
}

.site-content {
  flex-grow: 1;
  padding: 6rem 0;
}

@media (max-width: 767px) {
  .site-content {
    padding: 3rem 0;
  }
}

@media (min-width: 992px) {
  .post-feed {
    margin-left: auto;
    margin-right: auto;
    width: 750px;
  }
}

.feed {
  display: flex;
  align-items: center;
  line-height: 1;
  overflow: hidden;
  padding: 1.5rem 0;
  position: relative;
}

.feed:hover .feed-title {
  opacity: 0.8;
}

.feed:hover .feed-right {
  margin-right: 1.6rem;
}

.feed:hover .feed-icon {
  transform: translateX(0.3rem);
}

.feed + .feed {
  border-top: 1px solid var(--light-gray-color);
}

.feed-calendar {
  color: var(--brand-color);
  display: flex;
  font-size: 1.1rem;
  font-weight: 800;
  margin-right: 1.5rem;
  white-space: nowrap;
}

.feed-calendar-month {
  margin-right: 0.4rem;
  text-transform: uppercase;
}

.feed-title {
  flex-grow: 1;
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: 0;
  overflow: hidden;
  padding-right: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.feed-right {
  display: flex;
  align-items: center;
  transition: margin 0.2s var(--animation-base);
}

.feed-length {
  color: var(--secondary-text-color);
  font-size: 1.4rem;
  white-space: nowrap;
}

.feed-icon {
  color: var(--secondary-text-color);
  height: 16px;
  width: 16px;
  position: absolute;
  right: 0;
  transform: translateX(2rem);
  transition: transform 0.2s var(--animation-base);
}

.u-permalink {
  outline: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
}
</style>

<template>
  <div class="carousel-wrapper">
    <VueSlickCarousel v-bind="settings">
      <article
        v-for="article of articles"
        :key="article.slug"
        class="post featured"
      >
        <div class="u-placeholder horizontal">
          <img :src="article.img" class="u-object-fit" />
        </div>

        <h3 class="post-title">{{ article.title }}</h3>

        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="u-permalink"
        >
        </NuxtLink>
      </article>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => null,
    },
  },
  data() {
    return {
      settings: {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<style>
.featured-wrapper .post-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 3rem 0 0;
}

.u-placeholder {
  background-color: var(--lighter-gray-color);
  position: relative;
  z-index: 10;
}

.u-placeholder:before {
  content: '';
  display: block;
}

.u-placeholder.horizontal:before {
  padding-bottom: 50%;
}

.u-object-fit {
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
}

.post.featured {
  position: relative;
  padding-right: 30px;
}

.carousel-wrapper {
  position: relative;
}

.slick-arrow {
  position: absolute;
  top: -80px;
}

.slick-next {
  right: 0;
}

.slick-prev {
  right: 90px;
}
</style>

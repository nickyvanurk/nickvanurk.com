<template>
  <div class="owl">
    <article v-for="item of items" :key="item.slug" class="post featured">
      <div class="u-placeholder horizontal">
        <img :src="item.img" class="u-object-fit" />
      </div>

      <h3 class="post-title">{{ item.title }}</h3>

      <NuxtLink
        :to="{ name: 'blog-slug', params: { slug: item.slug } }"
        class="u-permalink"
      >
      </NuxtLink>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => null,
    },
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

.owl {
  display: none;
  position: relative;
  width: 100%;
  z-index: 1;
  -webkit-tap-highlight-color: transparent;
}
.owl .owl-stage {
  position: relative;
  touch-action: pan-Y;
}
.owl .owl-stage:after {
  clear: both;
  content: '.';
  display: block;
  height: 0;
  line-height: 0;
  visibility: hidden;
}
.owl .owl-stage-outer {
  overflow: hidden;
  position: relative;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.owl .owl-item {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  float: left;
  min-height: 1px;
  position: relative;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
.owl .owl-item > img {
  display: block;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  width: 100%;
}
.owl .owl-nav.disabled,
.owl .owl-dots.disabled {
  display: none;
}
.owl .owl-prev,
.owl .owl-next,
.owl .owl-dot {
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.owl .owl-prev,
.owl .owl-next {
  -webkit-box-align: center;
  align-items: center;
  background-color: var(--white-color);
  border: 1px solid var(--light-gray-color);
  border-radius: 3px;
  color: var(--dark-gray-color);
  display: -webkit-box;
  display: flex;
  height: 30px;
  -webkit-box-pack: center;
  justify-content: center;
  outline: none;
  padding: 0;
  position: absolute;
  text-align: center;
  top: -86px;
  -webkit-transition: color 0.5s var(--animation-base);
  transition: color 0.5s var(--animation-base);
  width: 30px;
}
.owl .owl-prev.disabled,
.owl .owl-next.disabled {
  color: var(--mid-gray-color);
  cursor: default;
}
.owl .owl-prev .icon,
.owl .owl-next .icon {
  height: 18px;
  width: 18px;
}
.owl .owl-prev {
  right: 34px;
}
.owl .owl-next {
  right: 0;
}
.owl .owl-dots {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 20px;
}
.owl .owl-dot {
  -webkit-box-align: center;
  align-items: center;
  border: 0;
  display: -webkit-box;
  display: flex;
  height: 20px;
  -webkit-box-pack: center;
  justify-content: center;
  outline: none;
  padding: 0;
  width: 20px;
}
.owl .owl-dot span {
  background-color: var(--light-gray-color);
  border-radius: 50%;
  height: 8px;
  width: 8px;
}
.owl .owl-dot.active span {
  background-color: var(--black-color);
}
.owl.owl-loaded {
  display: block;
}
.owl.owl-loading {
  display: block;
  opacity: 0;
}
.owl.owl-hidden {
  opacity: 0;
}
.owl.owl-refresh .owl-item {
  visibility: hidden;
}
.owl.owl-drag .owl-item {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.owl.owl-grab {
  cursor: move;
}
</style>

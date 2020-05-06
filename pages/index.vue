<template lang="md">
  This is the website of **Nicky van Urk**, programmer & tech enthusiast. I am most
  interested in philosophy, psychology, mathematics, physics and technology.
  Currently studying for my bachelor's degree in Computer Science.

  <div class="section">
    <h2>Education</h2>
    <ul>
      <li><a href="/education/courses">Courses I've followed</a></li>
      <li><a href="/education/books">Books I've read</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Home'
      }
    },
    head () {
      return {
        title: this.title,
      }
    }
  }
</script>

<style>
  .section {
    display: inline-block;
    vertical-align: top;
  }

  .section h2 {
    font-weight: bold;
    position: relative;
    font-size: 1.75em;
    line-height: 1.25;
    letter-spacing: -0.75px;
    margin: 1.75em 0 0.375em 0;
    overflow: hidden;
    font-size: 1.5em;
    line-height: 0.875;
    box-shadow: none;
    text-align: left;
    font-feature-settings: "smcp";
    padding: 0 1.375em 0 0;
  }
</style>

<template>
  <div>
    <nav>
      <div class="container">
        <a href="/"><font-awesome-icon :icon="['fas', 'home']"/></a>
        <a href="/contact"><font-awesome-icon :icon="['far', 'envelope']"/></a>
        <a href="https://github.com/nickyvanurk" target="_blank"><font-awesome-icon :icon="['fab', 'github']"/></a>
        <a href="https://linkedin.com/in/nickyvanurk" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
      </div>
    </nav>

    <div class="section">
      <div class="container">
        <nuxt/>
      </div>
    </div>

    <div class="section section-alt">
      <div class="container">
        <p class="copyright">©2020 Nicky van Urk. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>

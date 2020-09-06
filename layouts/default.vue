<template>
  <div class="container">
    <div class="site">
      <header class="site-header">
        <a class="logo" href="/">
          <img src="/images/logo.png" alt="logo" />
        </a>

        <nav>
          <a class="menu-item" href="/blog">Blog</a>
          <a class="menu-item" href="/contact">Contact</a>
        </nav>
      </header>

      <Nuxt />

      <footer class="site-footer">
        <div class="copyright">© 2020 Nicky van Urk. All rights reserved.</div>
      </footer>
    </div>
  </div>
</template>

<style>
:root {
  --brand-color: #ff572f;
  --primary-text-color: #333;
  --secondary-text-color: #999;
  --white-color: #fff;
  --lighter-gray-color: #f6f6f6;
  --light-gray-color: #e6e6e6;
  --mid-gray-color: #ccc;
  --dark-gray-color: #444;
  --darker-gray-color: #1a1a1a;
  --black-color: #000;
  --green-color: #28a745;
  --orange-color: #ffc107;
  --red-color: #dc3545;
  --facebook-color: #3b5998;
  --twitter-color: #1da1f2;
  --rss-color: #f26522;
  --animation-base: ease-in-out;
  --font-base: Muli, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Arial, sans-serif;
  --navbar-height: 80px;
  --scrollbar: 0px;
}

html {
  font-family: var(--font-base);
  font-size: 62.5%; /* 10 px */
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-size: 1.5rem;
  line-height: 1.6;
}

a {
  color: var(--darker-gray-color);
  text-decoration: none;
}

a:hover {
  opacity: 0.8;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}

@media (max-width: 767px) {
  .container {
    max-width: 460px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}

.site {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site-header {
  display: flex;
  align-items: center;
  height: var(--navbar-height);
}

.site-header .logo img {
  width: 21px;
  height: 21px;
}

.site-header nav {
  margin-left: auto;
  margin-right: auto;
}

.menu-item {
  font-weight: bold;
  margin: 0 1.5rem;
}

.site-footer {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0 4.5rem;
}

.copyright {
  color: var(--secondary-text-color);
  font-size: 1.2rem;
  letter-spacing: -0.02rem;
}
</style>

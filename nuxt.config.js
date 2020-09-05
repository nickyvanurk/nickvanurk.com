export default {
  head: {
    titleTemplate: '%s - Nicky van Urk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'css/fonts.css' },
      { rel: 'stylesheet', href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css' }
    ]
  },

  modules: [
    '@nuxtjs/markdownit',
    // 'nuxt-webfontloader',
    [ 'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set:'@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          },
          {
            set:'@fortawesome/free-regular-svg-icons',
            icons: ['far']
          }
        ]
      }
    ],
    '@nuxt/content'
  ],

  css: [
    '~assets/css/main.css',
  ],

  // webfontloader: {
  //   google: {
  //     families: ['Source+Serif+Pro:400,700']
  //   }
  // },
}

const { join, resolve } = require('path')

module.exports = {
  mode: 'spa',

  env: {
    SOCIAL_LINK_VK: 'https://vk.com/logitech',
    SOCIAL_LINK_FACEBOOK: 'https://www.facebook.com/logitechru/',
    MVIDEO_LINK: 'https://www.mvideo.ru/products/igrovye-naushniki-logitech-g432-981-000770-50126861?utm_medium=landing&utm_campaign=logo_naushniki',
  },

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Игровая гарнитура Logitech G432 с поддержкой технологии объемного звучания 7.1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Desc' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: resolve(__dirname, 'assets/styles/common.sass'), lang: 'sass' }
  ],

  resolve: {
    alias: {
      '@': join(__dirname),
      '~': join(__dirname, 'assets')
    }
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/waypoint', mode: 'client' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'vue-scrollto/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    sass: [
      './assets/styles/variables.sass'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

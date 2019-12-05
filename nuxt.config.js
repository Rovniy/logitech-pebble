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
      { name: 'author', content: 'Ravy & Seenix' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Desc' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'format-detection', content: 'telephone=no' },
      // TWITTER: OG
      { name: 'twitter:title', content: 'Игровая гарнитура Logitech G432 с поддержкой технологии объемного звучания 7.1' },
      { name: 'twitter:description', content: 'В универсальной игровой гарнитуре G432 с облегченной конструкцией используются диффузоры диаметром 50 мм, технология объемного звучания DTS, 6-миллиметровый микрофон и многое другое.' },
      { name: 'twitter:image', content: 'http://headsets.logitech.promo/images/misc/og_image.jpg' },
      // OPEN GRAPH
      { name: 'og:title', content: 'Игровая гарнитура Logitech G432 с поддержкой технологии объемного звучания 7.1' },
      { name: 'og:description', content: 'В универсальной игровой гарнитуре G432 с облегченной конструкцией используются диффузоры диаметром 50 мм, технология объемного звучания DTS, 6-миллиметровый микрофон и многое другое.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'http://headsets.logitech.promo' },
      { name: 'og:locale', content: 'ru_RU' },
      { name: 'og:image:width', content: '600' },
      { name: 'og:image:height', content: '315' },
      { name: 'og:image', content: 'http://headsets.logitech.promo/images/misc/og_image.jpg' }
    ],
    link: [
      { rel: 'shortcut icon', id: 'dynamic-favicon', href: 'images/misc/favicon_32x32.png'},
      { rel: 'apple-touch-icon', href: 'images/misc/apple-touch-icon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: true,
  loadingIndicator: {
    name: 'pulse',
    color: '#0BC2AD',
    background: 'white'
  },

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

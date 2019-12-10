const { join, resolve } = require('path')

module.exports = {
  mode: 'spa',

  env: {
    SOCIAL_LINK_VK: 'https://vk.com/logitech',
    SOCIAL_LINK_FACEBOOK: 'https://www.facebook.com/logitechru/',
    REVIEW_LINK: 'http://4pda.ru/2019/12/02/364841/',
    MVIDEO_LINK_WHITE: 'https://www.mvideo.ru/products/mysh-besprovodnaya-logitech-m350-910-005716-50130913?utm_source=landing_white&utm_medium=page&utm_campaign=Vendor_logitech_Pebble',
    MVIDEO_LINK_PINK: 'https://www.mvideo.ru/products/mysh-besprovodnaya-logitech-m350-910-005717-50130914?utm_source=landing_pink&utm_medium=page&utm_campaign=Vendor_logitech_Pebble',
    MVIDEO_LINK_BLACK: 'https://www.mvideo.ru/products/mysh-besprovodnaya-logitech-m350-910-005718-50130915?utm_source=landing_black&utm_medium=page&utm_campaign=Vendor_logitech_Pebble',
  },

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Logitech M350 Pebble. Тихая. Стильная. Современная. Мышь.',
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: 'Ravy & Seenix' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Logitech Pebble M350-это модная, ультралегкая, беспроводная мышь, которая идет туда, куда ведет вас жизнь. Тихие щелчки и прокрутка означают, что вы можете работать, не беспокоя никого вокруг вас' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'format-detection', content: 'telephone=no' },
      // TWITTER: OG
      { name: 'twitter:title', content: 'Logitech M350 Pebble. Тихая. Стильная. Современная. Мышь.' },
      { name: 'twitter:description', content: 'Logitech Pebble M350-это модная, ультралегкая, беспроводная мышь, которая идет туда, куда ведет вас жизнь. Тихие щелчки и прокрутка означают, что вы можете работать, не беспокоя никого вокруг вас' },
      { name: 'twitter:image', content: 'http://pebble.logitech.promo/images/misc/og_image.jpg' },
      // OPEN GRAPH
      { name: 'og:title', content: 'Logitech M350 Pebble. Тихая. Стильная. Современная. Мышь.' },
      { name: 'og:description', content: 'Logitech Pebble M350-это модная, ультралегкая, беспроводная мышь, которая идет туда, куда ведет вас жизнь. Тихие щелчки и прокрутка означают, что вы можете работать, не беспокоя никого вокруг вас' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'http://pebble.logitech.promo' },
      { name: 'og:locale', content: 'ru_RU' },
      { name: 'og:image:width', content: '600' },
      { name: 'og:image:height', content: '315' },
      { name: 'og:image', content: 'http://pebble.logitech.promo/images/misc/og_image.jpg' }
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
    { src: '~/plugins/waypoint', mode: 'client' },
    { src: '~/plugins/facebook.js', ssr: false },
    { src: '~/plugins/vkontakte.js', ssr: false },
    //{ src: '~/plugins/ga.js', mode: 'client' },
    { src: '~/plugins/yandex.js', ssr: false },
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

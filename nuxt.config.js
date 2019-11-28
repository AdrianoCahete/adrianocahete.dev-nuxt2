export default {
  mode: 'universal',

  // Headers of the page
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'author', content: 'Adriano Cahete' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  manifest: {
    name: 'Adriano Cahete Portfolio',
    short_name: 'Adriano Cahete',
    description: '',
    theme_color: '#172b4d'
  },

  meta: {
    // apple-mobile-web-app-capable=yes
    // https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb
    mobileAppIOS: true,
    appleStatusBarStyle: '#172b4d'
  },

  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS
  css: [
    // '~assets/argon/vendor/nucleo/css/nucleo.css',
    // '@fortawesome/fontawesome-free/css/all.css',
    // '~assets/argon/scss/argon.scss',
    // 'bootstrap-vue/dist/bootstrap-vue.css',
    // '~assets/transitions.css'
  ],

  // Plugins to load before mounting the App
  plugins: [
    // '~/plugins/common.js'
  ],

  // Nuxt.js dev-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module'
  ],

  // Nuxt.js modules
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios'
  ],

  // Build configuration
  build: {
    // You can extend webpack config here
    extend (config, ctx) {
    }
  }
}

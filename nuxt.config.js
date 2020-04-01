/* eslint-disable no-labels */
// import path from 'path'
// import fs from 'fs'

export default {
  mode: 'universal',
  render: {
    // csp: true
    // csp: { // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
    //   hashArgorism: 'sha256',
    //   policies: {
    //     'script-src': [
    //       "'sha256-4RS22DYeB7U14dra4KcQYxmwt5HkOInieXK1NUMBmQI='" // this line resolves the violation
    //     ]
    //   }
    // }
  },

  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
  //     cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
  //   }
  // },

  // Headers of the page
  head: {
    title: process.env.npm_package_name || '',
    // titleTemplate: '%s @ Adriano Cahete\'s Portfolio ',
    titleTemplate: 'Adriano Cahete\'s Portfolio ',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=2, user-scalable=1, shrink-to-fit=no' },
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
  // https://nuxtjs.org/api/configuration-loading
  loading: { color: '#fff' },

  pageTransition: {
    name: 'page',
    mode: 'out-in'
    // beforeEnter(el) {
    //   console.log('Before enter...');
    // }
  },

  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },

  // Global CSS
  css: [
    // '@fortawesome/fontawesome-free/css/all.css',
    // '~assets/transitions.css'
  ],

  // Plugins to load before mounting the App
  plugins: [
    // '~/plugins/common.js'
    '~/plugins/scrollspy'
  ],

  // Nuxt.js dev-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module'
  ],

  // Nuxt.js modules
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios'
    '@nuxtjs/device'
  ],

  // Build configuration
  build: {
    // You can extend webpack config here
    extend (config, ctx) {
    }
  }
}

/* eslint-disable no-labels */

export default defineNuxtConfig({
  server: {
    port: 3002,
  },

  runtimeConfig: {
    appVersion: require("./package.json").version,
    appAuthor: require("./package.json").author,
    appContact: require("./package.json").mail,
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },

    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },

    head: [
      { charset: "utf-8" },
      { name: "X-UA-Compatible", content: "IE=edge" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=2, user-scalable=1, shrink-to-fit=no",
      },
      {
        name: "keywords",
        content:
          "Design Technologist, designops, designerops, design ops, designer ops, product design, product designer, designer de produto, UI, UX, UI/UX, UI developer, Desenvolvedor de Interface, Designer, Cahete, Adriano Cahete, Design Enginner",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
      {
        name: "author",
        content: process.env.npm_package_author || "Adriano Cahete",
      },
      {
        name: "theme-color",
        content: process.env.npm_package_project_theme_color || "#175e80",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: process.env.npm_package_description,
      },
      { property: "og:url", content: process.env.npm_package_url },
      {
        property: "og:site_name",
        content: process.env.npm_package_description,
      },
      {
        property: "og:description",
        content: process.env.npm_package_description,
      },
      {
        property: "og:image",
        itemprop: "image",
        name: "image",
        content: process.env.npm_package_url + "/cover.png",
      },
      {
        property: "og:image:secure_url",
        itemprop: "image",
        name: "image",
        content: process.env.npm_package_url + "/cover.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  },

  // Headers of the page
  meta: {
    title: process.env.npm_package_name || "",
    titleTemplate: "%s @ Adriano Cahete | Design Technologist & DesignOps",
    htmlAttrs: {
      lang: "en-US",
      amp: false,
    },

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://in.hotjar.com" },
      { rel: "preconnect", href: "https://script.hotjar.com" },
      { rel: "preconnect", href: "https://vars.hotjar.com" },
    ],
  },

  manifest: {
    name:
      process.env.npm_package_author_title ||
      "Adriano Cahete | Design Technologist & DesignOps",
    short_name:
      process.env.npm_package_author_title ||
      "Adriano Cahete | Design Technologist & DesignOps",
    description:
      process.env.npm_package_description || "Design Technologist & DesignOps",
    theme_color: process.env.npm_package_project_theme_color || "#175e80",
    display: "minimal- ui",
  },

  meta: {
    mobileAppIOS: true,
    appleStatusBarStyle: "black-translucent",
  },

  // Customize the progress-bar color
  // https://nuxtjs.org/api/configuration-loading
  // loading: '~/components/common/loading.vue',
  loading: { color: "#FFFFFF" },

  sitemap: {
    hostname: "https://adrianocahete.dev",
    gzip: true,
    exclude: ["/debug", "/resume"],
  },

  pwa: {
    // workbox: {
    //   // Offline
    //   offline: true,
    //   offlineStrategy: 'NetworkFirst'
    // },
    manifest: {
      display: "browser",
    },
  },

  // https://nuxt.com/docs/getting-started/transitions#view-transitions-api-experimental
  // experimental: {
  //   viewTransition: true
  // },

  // Plugins to load before mounting the App
  plugins: [
    // '~/plugins/common.js'
  ],

  // Nuxt.js modules
  modules: [
    // Update to Nuxt 3:
    // "@nuxtjs/pwa", // https://pwa.nuxtjs.org/
    // "@nuxtjs/device",
    // "nuxt-payload-extractor",
    // "@nuxtjs/sitemap",
  ],

  // Build configuration
  build: {},
});

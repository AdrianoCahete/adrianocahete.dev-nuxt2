import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    // Update to Nuxt 3:
    // "@nuxtjs/pwa", // https://pwa.nuxtjs.org/
    // "@nuxtjs/device",
    // "nuxt-payload-extractor",
    // "@nuxtjs/sitemap",
  ],

  experimental: {
    viewTransition: true,
  },

  server: {
    port: 3002,
  },

  runtimeConfig: {
    public: {
      appVersion: require("./package.json").version,
      appAuthor: require("./package.json").author,
      appContact: require("./package.json").mail,
    },
  },

  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      noscript: [{ children: "Javascript is required" }],
    },
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
    workbox: {
      enabled: true, // Dev Enable. Prod is by default
      // cachingExtensions: {},
      // offlineStrategy: {}
    },
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
});

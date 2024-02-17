// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vue: {
    propsDestructure: true,
  },

  experimental: {
    viewTransition: true,
  },

  // WebApp Config
  site: {
    url: "https://adrianocahete.dev",
    name: "Adriano Cahete | FrontEnd Developer & DesignOps",
    description: "FrontEnd Developer & DesignOps",
    defaultLocale: "pt-BR", // not needed if you have @nuxtjs/i18n installed
    trailingSlash: false,
  },

  // SEO
  schemaOrg: {
    identity: "Person",
  },

  ogImage: {
    enabled: false,
  },

  linkChecker: {
    enabled: false,
  },

  seoExperiments: {
    enabled: false,
  },

  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=1",
        },
        {
          name: "keywords",
          content:
            "FrontEnd Developer, FrontEnd, Front-End, Front End, Design Technologist, designops, designerops, design ops, designer ops, product design, product designer, designer de produto, UI, UX, UI/UX, UI developer, Desenvolvedor de Interface, Designer, Cahete, Adriano Cahete, Design Enginner",
        },
        {
          hid: "description",
          name: "description",
          content: "", // process.env.npm_package_description
        },
        {
          name: "author",
          content: "Adriano Cahete", // process.env.npm_package_author
        },
        {
          name: "theme-color",
          content: "#175e80", // process.env.npm_package_project_theme_color
        },

        { property: "og:type", content: "website" },
        // { property: "og:title", content: process.env.npm_package_description },
        // { property: "og:url", content: process.env.npm_package_url },
        {
          property: "og:site_name",
          // content: process.env.npm_package_description,
        },
        {
          property: "og:description",
          // content: process.env.npm_package_description,
        },
        {
          property: "og:image",
          itemprop: "image",
          name: "image",
          // content: process.env.npm_package_url + "/cover.png",
        },
        {
          property: "og:image:secure_url",
          itemprop: "image",
          name: "image",
          // content: process.env.npm_package_url + "/cover.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      noscript: [{ children: "JavaScript is required" }],
    },

    // meta: {
    //   mobileAppIOS: true,
    //   appleStatusBarStyle: "black-translucent",
    // },
  },

  // https://nuxt.com/modules/vue-transitions
  modules: ["@nuxtjs/seo", "@nuxt/ui"],
});

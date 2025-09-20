// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  

  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxtjs/strapi", "@nuxt/fonts", "@nuxt/icon",  '@pinia/nuxt'],

  css: ["~/assets/css/main.css"],

  fonts: {
    assets: {},
    families: [
      { name: "Volija", src: "/fonts/Volja/Volja-Regular.woff2", weight: "normal" },
      { name: "UAFSans", src: "/fonts/UAFSans/UAFSans-Regular.ttf", weight: "normal" },
      { name: "UAFSans Medium", src: "/fonts/UAFSans/UAFSans-Medium.ttf", weight: "600" },
      { name: "UAFSans SemiBold", src: "/fonts/UAFSans/UAFSans-SemiBold.ttf", weight: "700" },
      { name: "UAFSans Bold", src: "/fonts/UAFSans/UAFSans-Bold.ttf", weight: "900" }
    ],
  },

  compatibilityDate: "2025-07-16",

  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.STRAPI_URL || "http://localhost:1337",
      },
    },
  },
});
